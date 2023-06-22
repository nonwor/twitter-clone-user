import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/tweets": "http://localhost:4002",
      "/users":"http://localHost:4002"
      
      
    }
  }
})
