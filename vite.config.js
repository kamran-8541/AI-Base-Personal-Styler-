import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,          // allows access from your Wi-Fi IP (0.0.0.0)
    port: 5173,          // default Vite port — change if needed
  },
})
