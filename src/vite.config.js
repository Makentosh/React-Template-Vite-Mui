import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import fs from 'fs/promises';

// const LOCAL = 'local';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [svgr(), react()],
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.jsx?$/,
      // loader: "tsx",
      // include: /src\/.*\.[tj]sx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: 'load-js-files-as-jsx',
            setup(build) {
              build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
                loader: 'jsx',
                contents: await fs.readFile(args.path, 'utf8'),
              }));
            },
          },
        ],
      },
    },
    server: {
      port: env.VITE_APP_PORT,
      // open: env.VITE_APP_VERSION === LOCAL,
      watch: {
        usePolling: true, //from hot reload in docker container
      },
      build: {
        chunkSizeWarningLimit: 5000,
      },
    },
  };
});
