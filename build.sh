#!/bin/bash

# Navigate to the project directory
cd project

# Install dependencies
npm install

# Build the project
npm run build

# Create a public directory at the root level if it doesn't exist
mkdir -p ../public

# Copy the contents of dist to public
cp -r dist/* ../public/

echo "Build completed successfully!"
