import { playwrightLauncher } from './node_modules/@web/test-runner-playwright/dist/index.js';

export default {
  browsers: [
    playwrightLauncher({ product: 'chromium' }), 
  ],
  nodeResolve: true,
  files: 'test/**/*.test.js',
};