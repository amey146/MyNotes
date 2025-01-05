import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@fortawesome/free-solid-svg-icons','@fortawesome/react-fontawesome','date-fns'],
    },
  },
})
