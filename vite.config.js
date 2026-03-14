import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/enzocipher.github.io/',
  plugins: [react()],
})
