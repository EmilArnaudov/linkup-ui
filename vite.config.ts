import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Unfonts from 'unplugin-fonts/vite'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), Unfonts({
    custom: {
      families: [{
        name: 'DragonHunter',
        local: 'DragonHunter',
        src: './public/DragonHunter.otf',
      }],
      display: 'auto',
      preload: true,
      prefetch: false,
      injectTo: 'head-prepend',
    },

  }),],
  resolve: {
    alias: {
      'components': '/src/components',
      'pages': '/src/pages',
      'stores': '/src/stores',
      'api': '/src/api',
      'assets': '/src/assets'
    },
  },
})
