import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), legacy({
    modernPolyfills: true, 
    renderLegacyChunks: true,
  })],
  server: {
    port: 3001,
    host: '0.0.0.0',
    historyApiFallback: true
  }
})
