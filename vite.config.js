import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        pandamember: resolve(import.meta.dirname, 'pandamember-x9k2m7v8p.html'),
      },
    },
  },
})