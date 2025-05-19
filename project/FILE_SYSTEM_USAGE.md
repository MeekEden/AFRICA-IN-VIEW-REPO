# Opening the Application Directly from the File System

This guide explains how to open the Explore Africa application directly from your file system without needing to run a server.

## Option 1: Build a File System Compatible Version (Recommended)

The most reliable way to use the application directly from the file system is to build a special version optimized for this purpose:

1. Open a command prompt in the project folder
2. Run: `npm run build:file`
3. Open the `dist/index.html` file in your browser

This will create a version of the application with:
- Relative paths instead of absolute paths
- Modified Content Security Policy to allow file:// protocol
- HashRouter instead of BrowserRouter for better compatibility
- Additional standalone HTML files for fallback

## Option 2: Use the Standalone HTML Files

If you're primarily interested in viewing the updated images, you can use one of the standalone HTML files:

- `explore-africa-standalone.html` - A complete standalone version with the updated images
- `images-only.html` - A simple gallery showing just the images

These files work directly from the file system without any build process.

## Option 3: Use a Local Web Server (Most Compatible)

For the best experience with the full application:

1. Open a command prompt in the project folder
2. Run: `npx serve`
3. Open the URL shown in the command output (usually http://localhost:3000)

This method avoids all the limitations of the file:// protocol.

## Troubleshooting

### Browser Security Restrictions

Modern browsers have security restrictions when loading JavaScript modules from the file:// protocol. If you see error messages about this:

1. Try using the built version from Option 1
2. Try the standalone HTML files from Option 2
3. Use a local web server as described in Option 3

### For Chrome Users Only (Advanced)

You can create a special Chrome shortcut that bypasses some security restrictions:

1. Right-click on Chrome shortcut and select "Properties"
2. Add `--allow-file-access-from-files` to the end of the Target field
3. Click OK and use this shortcut to open Chrome
4. Open the index.html file in this Chrome instance

**Warning:** This disables security features in Chrome. Only use this special Chrome instance for testing local files, not for general browsing.

## Why This Is Necessary

Modern web applications use features that require a web server due to browser security restrictions:
- JavaScript modules (ES modules)
- CORS (Cross-Origin Resource Sharing) policies
- Content Security Policies
- Absolute path references

The modifications we've made help work around these limitations, but some features may still not work perfectly when opened directly from the file system.
