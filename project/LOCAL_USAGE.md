# Explore Africa - Local Usage Guide

This document explains how to use the Explore Africa website locally without needing to run a server.

## Options for Viewing the Website

### Option 1: Static Version (Recommended for Direct File Access)

The `static-version.html` file is a simplified version of the website that works directly when opened from your file system. It includes:

- Basic styling similar to the full application
- Sample data for a few countries
- Images loaded from Cloudinary
- No build process or server required

**To use:**
1. Simply double-click on `static-version.html` to open it in your browser
2. All resources should load correctly

### Option 2: Standalone Version (For Testing the Full Application)

The `standalone-index.html` file attempts to load the full application directly from the file system, but may have limitations due to browser security restrictions.

**To use:**
1. Make sure you've built the application using `npm run build`
2. Double-click on `standalone-index.html` to open it in your browser
3. If there are issues, follow the instructions displayed on the page

### Option 3: Using a Simple Local Server (Best Experience)

For the best experience with the full application:

1. Install Node.js if you haven't already
2. Open a command prompt in this folder
3. Run: `npx serve`
4. Open the URL shown in the command output (usually http://localhost:3000)

## Troubleshooting

### Images Not Loading

If images aren't loading:
- Check your internet connection (images are loaded from Cloudinary)
- Try using the static version instead
- Use a local server as described in Option 3

### JavaScript Not Working

Modern browsers have security restrictions when loading JavaScript modules from the file system. To fix this:
- Use the static version
- Use a local server
- For Chrome only (not recommended for general browsing):
  - Close all Chrome windows
  - Right-click on Chrome shortcut and select "Properties"
  - Add `--allow-file-access-from-files --disable-web-security --disable-site-isolation-trials` to the end of the Target field
  - Click OK and open Chrome using this shortcut
  - Remember to use normal Chrome for regular browsing

### Content Security Policy Issues

If you see errors related to Content Security Policy:
- Use the static version
- Use a local server
- Disable your browser's security features temporarily (not recommended for general browsing)

## Why This Is Necessary

Modern web applications use features that require a web server due to browser security restrictions:
- JavaScript modules
- CORS (Cross-Origin Resource Sharing) policies
- Content Security Policies
- Absolute path references

The static version works around these limitations by using a simplified approach that's compatible with direct file access.
