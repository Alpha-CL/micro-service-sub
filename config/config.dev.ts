import { defineConfig } from '@umijs/max';

export default defineConfig({
  mpa: {
    template: 'templates/default.html',
    getConfigFromEntryFile: true,
    // layout: '@/layouts/index.tsx',
    entry: {
      demo: {
        description: 'Demo entry',
      },
    },
  },
  base: './',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  manifest: {
    basePath: './', // basePath: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
  },
});
