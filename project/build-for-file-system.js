/**
 * Build script to create a version of the application that works directly from the file system
 * 
 * This script:
 * 1. Builds the application with Vite
 * 2. Modifies the generated index.html to work with file:// protocol
 * 3. Copies the standalone HTML files to the dist folder
 */

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Function to execute shell commands
function runCommand(command) {
  return new Promise((resolve, reject) => {
    console.log(`Running: ${command}`);
    exec(command, { cwd: __dirname }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return reject(error);
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
      console.log(`stdout: ${stdout}`);
      resolve(stdout);
    });
  });
}

// Function to modify the index.html file to work with file:// protocol
function modifyIndexHtml() {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.error(`Error: ${indexPath} does not exist`);
    return;
  }
  
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Replace absolute paths with relative paths
  content = content.replace(/src="\//g, 'src="./');
  content = content.replace(/href="\//g, 'href="./');
  
  // Add base tag for relative paths
  content = content.replace(/<head>/, '<head>\n    <base href="./">');
  
  // Modify Content Security Policy to allow file:// protocol
  content = content.replace(
    /<meta http-equiv="Content-Security-Policy"[^>]*>/,
    `<meta http-equiv="Content-Security-Policy" content="
      default-src 'self' file: data: blob: https:;
      script-src 'self' 'unsafe-inline' 'unsafe-eval' file: blob: https:;
      style-src 'self' 'unsafe-inline' file: blob: https:;
      img-src 'self' file: data: blob: https: https://res.cloudinary.com https://flagcdn.com https://s3.amazonaws.com https://cloudfront.safaribookings.com;
      font-src 'self' file: data: blob: https:;
      connect-src 'self' file: data: blob: https: https://ipapi.co https://api.exchangerate-api.com;
      frame-src 'self' file: data: blob: https: https://www.youtube.com https://player.vimeo.com;
    ">`
  );
  
  fs.writeFileSync(indexPath, content);
  console.log('Modified index.html for file:// protocol compatibility');
}

// Function to copy standalone HTML files to dist folder
function copyStandaloneFiles() {
  const files = [
    'explore-africa-standalone.html',
    'images-only.html',
    'README.html'
  ];
  
  files.forEach(file => {
    const sourcePath = path.join(__dirname, file);
    const destPath = path.join(__dirname, 'dist', file);
    
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied ${file} to dist folder`);
    } else {
      console.warn(`Warning: ${sourcePath} does not exist`);
    }
  });
}

// Main function
async function main() {
  try {
    // Build the application
    await runCommand('npm run build');
    
    // Modify the index.html file
    modifyIndexHtml();
    
    // Copy standalone HTML files
    copyStandaloneFiles();
    
    console.log('\nBuild completed successfully!');
    console.log('\nTo use the application:');
    console.log('1. Open the dist/index.html file in your browser');
    console.log('2. If you have issues, try dist/explore-africa-standalone.html or dist/images-only.html');
    
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

main();
