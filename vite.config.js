import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detect if we are on GitHub Pages
const repoName = 'e-commerce' // change to your GitHub repo name

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/', // GitHub Pages → /repo-name/, Netlify → /
})
