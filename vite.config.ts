import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/main', replacement: resolve(__dirname, 'src/main') },
      { find: '@/ui', replacement: resolve(__dirname, 'src/ui') },
    ],
  },
  server: {
    host: true,
    port: 5000,
  },
})
