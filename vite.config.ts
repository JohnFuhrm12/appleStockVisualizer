import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  server: {
    proxy: {
      '/financials': {
        target: 'http://127.0.0.1:8000/financials',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/financials/, ''),
      },
    },
  },
})
