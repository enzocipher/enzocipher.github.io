import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  base: '/',
  plugins: [preact({ devToolsEnabled: false })],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['**/*.css'],
      thresholds: {
        lines: 95,
        functions: 95,
        statements: 95,
      },
    },
  },
})
