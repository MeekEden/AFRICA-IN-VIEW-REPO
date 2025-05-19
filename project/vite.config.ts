import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Generate relative paths in the build output
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Ensure asset filenames don't include hashes for better file:// compatibility
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  // Use relative base path for better file:// compatibility
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
