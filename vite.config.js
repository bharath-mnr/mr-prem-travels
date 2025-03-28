import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  // server: {
  //   host: '0.0.0.0', // Allow external access
  //   allowedHosts: ['.ngrok-free.app'], // Allow all Ngrok subdomains
  // }
})
