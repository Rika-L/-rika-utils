import path, { resolve } from 'node:path'
import { defineConfig } from 'vite'

const fileName = {
  es: `index.esm.js`,
  cjs: `index.cjs`,
}

const formats = Object.keys(fileName) as Array<keyof typeof fileName>

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@@', replacement: path.resolve(__dirname) },
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@rika_/utils',
      formats,
      fileName: format => fileName[format],
    },
  },
})
