// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Static landing site for https://github.com/asteria-core/biome, deployed to GitHub Pages.
// Analytics and Cookie Notification Bar load only on canonical biome.dev when
// PUBLIC_GA_MEASUREMENT_ID is configured; forks and local builds make zero
// runtime requests to Google hosts.
export default defineConfig({
  site: 'https://biome.dev',
  output: 'static',
  fonts: [
    {
      // Google Sans Flex (OFL), self-hosted so the page never calls fonts.googleapis.com.
      provider: fontProviders.local(),
      name: 'Google Sans Flex',
      cssVariable: '--font-display',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            weight: '100 1000',
            style: 'normal',
            display: 'swap',
            src: ['./src/assets/fonts/google-sans-flex.woff2'],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Google Sans Code',
      cssVariable: '--font-mono',
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      options: {
        variants: [
          {
            weight: '300 800',
            style: 'normal',
            display: 'swap',
            src: ['./src/assets/fonts/google-sans-code.woff2'],
          },
        ],
      },
    },
  ],
  vite: {
    build: {
      // Keep light-dark(), @layer, relative color syntax and @property untouched.
      // The gBreeze stylesheets rely on them and scoped color-scheme flips need
      // light-dark() to survive to the browser.
      cssTarget: 'esnext',
    },
  },
});
