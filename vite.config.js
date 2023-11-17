import {defineConfig} from 'vite'
import {fileURLToPath} from 'url'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: false,
    server: {
        port: 3000
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                assetFileNames: assetInfo => {
                    if (/\.css$/.test(assetInfo.name)) {
                        return 'css/[name]-[hash].css'
                    }
                    return 'images/[name].[ext]'
                },
                entryFileNames: 'js/[name]-[hash].js',
                chunkFileNames: 'js/[name]-[hash].js',
            }
        }
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
