import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Ganalakshmi-Engineers/', // This is required for GitHub Pages
});
