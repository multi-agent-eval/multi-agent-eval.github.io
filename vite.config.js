import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment - update 'mas-leaderboard' to your repo name
  base: '/leaderboard_website/',
})
