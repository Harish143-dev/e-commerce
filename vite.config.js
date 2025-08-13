import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get repo name from package.json or set manually
const repoName = 'e-commerce';

export default defineConfig(({ command }) => {
  // If you're running build for GitHub Pages, use repo path
  const isGithub = process.env.DEPLOY_TARGET === 'GH_PAGES';

  return {
    plugins: [react()],
    base: isGithub ? `/${repoName}/` : '/', // Netlify uses '/'
  };
});
