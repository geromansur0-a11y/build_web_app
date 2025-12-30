import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hostinger-horizons-app/', // Nama repository Anda
  server: {
    port: 5173,
    host: true
  }
})
