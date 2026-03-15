import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', 'logo.png'],
        workbox: {
          maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,ttf}'],
        },
        manifest: {
          name: 'Wiselearn SSLC',
          short_name: 'Wiselearn',
          description: 'Your companion for SSLC English curriculum',
          id: '/',
          theme_color: '#1a1f4e',
          background_color: '#f8fafc',
          display: 'standalone',
          orientation: 'portrait',
          scope: '/',
          start_url: '/',
          lang: 'en-US',
          categories: ['education', 'books', 'reference'],
          icons: [
            {
              src: 'logo.png',
              sizes: '400x400',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ],
          shortcuts: [
            {
              name: 'SSLC English',
              short_name: 'SSLC',
              description: 'Go to SSLC English',
              url: '/sslc',
              icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }]
            },
            {
              name: 'Plus One',
              short_name: 'Plus One',
              description: 'Go to Plus One',
              url: '/plusone',
              icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }]
            }
          ],
          screenshots: [
            {
              src: 'logo.png',
              sizes: '400x400',
              type: 'image/png',
              form_factor: 'narrow',
              label: 'Wiselearn Learning App'
            }
          ]
        }
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
