import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/study-rout2/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
}) 