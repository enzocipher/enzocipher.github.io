import { defineConfig } from 'vitest/config'
import preact from '@preact/preset-vite'

export default defineConfig({
  base: '/',
  plugins: [preact({ devToolsEnabled: false })],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        '**/*.css',
        'src/main.tsx',
        'src/**/*.d.ts',
        'src/**/*.test.{ts,tsx}',
      ],
      thresholds: {
        lines: 95,
        functions: 95,
        statements: 95,
      },
    },
  },
})
