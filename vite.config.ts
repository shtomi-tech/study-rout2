import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-htaccess',
      writeBundle() {
        // ビルド完了後に.htaccessファイルをコピー
        try {
          copyFileSync('.htaccess', 'dist/.htaccess')
          console.log('✅ .htaccessファイルをdistフォルダにコピーしました')
        } catch (error) {
          console.log('⚠️ .htaccessファイルが見つかりません')
        }
      }
    }
  ],
  // サブディレクトリにデプロイする場合
  // base: '/study-rout2/',
  // ルートディレクトリにデプロイする場合は以下を使用
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
}) 