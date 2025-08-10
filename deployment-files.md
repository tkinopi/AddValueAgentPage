# ロリポップへのデプロイファイル一覧

## アップロードが必要なファイル
```
client/dist/
├── index.html
├── assets/
│   ├── index-*.js
│   ├── index-*.css
│   └── company-logo-*.png
├── favicon.png
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest
```

## GAS関連（Googleで管理）
- gas-contact-form.gs → Google Apps Scriptで実行
- デプロイURL → フロントエンドのJSに埋め込み

## 注意点
1. **GASのURLをフロントエンドに設定**
   - `useGoogleAppsScript.ts`の`GAS_URL`を更新
   - ビルド前に必ず設定

2. **CORS対策**
   - `mode: 'no-cors'`で実装済み
   - レスポンスは読めないが送信は可能

3. **ロリポップの設定**
   - 特別な設定は不要
   - 通常の静的ファイルホスティングでOK