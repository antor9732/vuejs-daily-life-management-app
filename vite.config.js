import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/VueJs-Daily-Life-Management-App/', // Match your repository name exactly
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
