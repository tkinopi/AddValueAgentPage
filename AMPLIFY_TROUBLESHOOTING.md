# AWS Amplify デプロイ トラブルシューティング

## 解決済みの問題

### 1. Node.js バージョン警告
**エラー**: Node.js 18 support ends soon warning

**解決方法**:
- `amplify.yml` で Node.js 20 を指定
- `package.json` の engines フィールドで Node.js 20+ を要求

```yaml
# amplify.yml
preBuild:
  commands:
    - nvm use 20
```

```json
// package.json
{
  "engines": {
    "node": ">=20.0.0"
  }
}
```

### 2. required-server-files.json エラー
**エラー**: Can't find required-server-files.json in build output directory

**原因**: AmplifyがSSRフレームワーク（Next.js/Nuxt）を期待しているが、ViteのSPAプロジェクト

**解決方法**:
```yaml
# amplify.yml
build:
  commands:
    - npm run build
    - echo '{}' > dist/required-server-files.json
```

## 現在の amplify.yml 設定

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - nvm use 20
        - node --version
        - npm --version
        - cd client
        - npm ci
    build:
      commands:
        - npm run build
        - echo "Build completed, checking dist directory..."
        - ls -la dist/
        - echo "Creating empty required-server-files.json for Amplify compatibility..."
        - echo '{}' > dist/required-server-files.json
  artifacts:
    baseDirectory: client/dist
    files:
      - '**/*'
  cache:
    paths:
      - client/node_modules/**/*
```

## その他のトラブルシューティング

### ビルドエラーの確認方法
1. Amplify コンソール → アプリ → ビルド履歴
2. 失敗したビルドをクリック
3. ログを確認

### よくある問題と解決方法

#### 1. 環境変数が反映されない
- Amplifyコンソール → 環境変数を確認
- 再デプロイが必要

#### 2. CORSエラー
- Lambda Function URLの設定を確認
- AllowedOriginがAmplifyドメインと一致しているか確認

#### 3. 静的ファイルが見つからない
- `baseDirectory` が正しいか確認（client/dist）
- ビルド後にファイルが存在するか確認

#### 4. ビルドが遅い
- キャッシュ設定を確認
- 不要な依存関係を削除

### Amplify コンソールでの確認項目

1. **アプリ設定**
   - ビルド設定が amplify.yml を使用しているか
   - 環境変数が設定されているか

2. **ドメイン管理**
   - HTTPS が有効になっているか
   - カスタムドメインの設定

3. **監視**
   - アクセスログ
   - エラーログ

### デバッグ用コマンド

```bash
# ローカルでビルドテスト
cd client
npm run build
ls -la dist/

# Amplify CLI でローカルテスト（オプション）
npm install -g @aws-amplify/cli
amplify init
amplify serve
```

### 本番デプロイ前のチェックリスト

- [ ] Node.js 20 が指定されている
- [ ] 環境変数 `VITE_LAMBDA_FUNCTION_URL` が設定されている
- [ ] Lambda Function URL がデプロイされている
- [ ] CORS設定が正しい
- [ ] ローカルビルドが成功する
- [ ] 全ての依存関係がインストールされている

### パフォーマンス最適化

1. **ビルド時間の短縮**
```yaml
cache:
  paths:
    - client/node_modules/**/*
    - client/.vite/**/*
```

2. **バンドルサイズの最適化**
```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-button']
        }
      }
    }
  }
})
```

3. **画像最適化**
- WebP形式の使用
- 適切なサイズでの画像配信
- 遅延読み込み

### セキュリティ設定

1. **CSP (Content Security Policy)**
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

2. **HTTPS リダイレクト**
- Amplify コンソール → ドメイン管理 → HTTPS設定

3. **アクセス制限**
- 必要に応じてパスワード保護やIP制限を設定