import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      assets: '/src/assets',
    },
  },
  define: {
    'process.env': {
      APIKEY: JSON.stringify(process.env.APIKEY),
      AUTHDOMAIN: JSON.stringify(process.env.AUTHDOMAIN),
      PROJECTID: JSON.stringify(process.env.PROJECTID),
      STORAGEBUCKET: JSON.stringify(process.env.STORAGEBUCKET),
      MESSAGINGSENDERID: JSON.stringify(process.env.MESSAGINGSENDERID),
      APPID: JSON.stringify(process.env.APPID),
      MEASUREMENTID: JSON.stringify(process.env.MEASUREMENTID),
    },
  },
  base: '/Psychologists/',
});
