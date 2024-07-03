import { defineConfig, loadEnv, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const APP_VERSION = {
  docker: 'docker',
  local: 'local',
  production: 'production',
  development: 'development'
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [svgr({

      exportAsDefault: true
    }),
      {
        name: 'treat-js-files-as-jsx',
        async transform(code, id) {
          if ( !id.match(/src\/.*\.js$/) ) return null;

          // Use the exposed transform from vite, instead of directly
          // transforming with esbuild
          return transformWithEsbuild(code, id, {
            loader: 'jsx',
            jsx: 'automatic',
          });
        },
      }, react()],
    esbuild: {
      // jsxInject: `import React from 'react'`,
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      exclude: [],
    },
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
    server: {
      port: env.VITE_APP_VERSION === APP_VERSION.docker ? env.DOCKER_PORT : env.PORT,
      host: env.VITE_APP_VERSION === APP_VERSION.docker ? true : env.HOST,
      open: env.VITE_APP_VERSION === APP_VERSION.local,
      watch: {
        usePolling: true, //from hot reload in docker container
      },
    },
    build: {
      outDir: 'build',
      chunkSizeWarningLimit: 5000,
    },
  };
});
