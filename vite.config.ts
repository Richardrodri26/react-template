import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), TanStackRouterVite(),],
  resolve: {
    alias: {
        '@': resolve(__dirname, 'src'),
    },
},
})
