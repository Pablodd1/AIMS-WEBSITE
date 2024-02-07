import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Use process.env to access environment variables
const { APILink, PUBLIC_URL } = process.env;

export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // Other PostCSS plugins...
      ],
    },
  },
    define: {
      'process.env': {
        REACT_APP_APILink: JSON.stringify(APILink),
        REACT_APP_PUBLIC_URL: JSON.stringify(PUBLIC_URL),
      },
    },
    resolve: {
      alias: [
        {
          find: /^~.+/,
          replacement: (val) => {
            return val.replace(/^~/, "");
          },
        },
      ],
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      }
    }
  });
