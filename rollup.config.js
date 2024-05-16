import { defineConfig } from 'rollup'

export default defineConfig({
  input: 'src/index.js',
  output: {
    entryFileNames: '[hash].js',
    chunkFileNames: '[hash].js',
  },
  plugins: [
    {
      name: 'virtual-id',
      resolveId(source) {
        if (source === '#virtual-id') {
          return source
        }
      },
      load(id) {
        if (id === '#virtual-id') {
          return `export const id = "${Math.random()}"`
        }
      }
    }
  ]
})
