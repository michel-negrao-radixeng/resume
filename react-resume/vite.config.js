import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base is set to '/resume/' for GitHub Pages deployment.
// Hosted at: https://michel-negrao-radixeng.github.io/resume/
export default defineConfig({
  plugins: [react()],
  base: '/resume/',
})
