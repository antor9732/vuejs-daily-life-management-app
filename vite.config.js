import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // Change to relative path
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: '',  // Change to empty string
    rollupOptions: {
      output: {
        assetFileNames: '[name].[hash][extname]',
        chunkFileNames: '[name].[hash].js',
        entryFileNames: '[name].[hash].js'
      }
    }
  }
})
