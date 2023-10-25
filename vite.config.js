import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'docs')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/week7-app/',
  build: {
    outDir,
    emptyOutDir: true
}})
