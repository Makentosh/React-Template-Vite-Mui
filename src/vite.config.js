import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const LOCAL = 'local';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [svgr(), react()],
    server: {
      port: env.VITE_APP_PORT,
      open: env.VITE_APP_VERSION === LOCAL,
      watch: {
        usePolling: true, //from hot reload in docker container
      },
    },
  };
});
