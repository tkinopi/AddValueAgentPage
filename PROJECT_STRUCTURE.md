# プロジェクト構造

## 現在の構造（Amplify対応版）

```
AddValueAgentPage/
├── src/                     # Reactソースコード
│   ├── components/          # コンポーネント
│   ├── pages/               # ページコンポーネント
│   ├── hooks/               # カスタムフック
│   ├── lib/                 # ユーティリティ
│   ├── assets/              # 静的アセット
│   ├── App.tsx              # メインアプリ
│   ├── main.tsx             # エントリーポイント
│   └── index.css            # グローバルCSS
├── public/                  # 静的ファイル
│   ├── heroimageforaddvalue.png
│   ├── hero_image_example.png
│   ├── favicon.png
│   └── _redirects           # SPAリダイレクト
├── lambda/                  # Lambda関数（別デプロイ）
│   └── contact/
│       ├── index.js
│       └── package.json
├── index.html               # HTMLテンプレート
├── vite.config.ts           # Vite設定
├── package.json             # 依存関係
├── tsconfig.json            # TypeScript設定
├── tailwind.config.ts       # Tailwind CSS設定
├── postcss.config.js        # PostCSS設定
├── amplify.yml              # Amplifyビルド設定
└── customHttp.yml           # HTTPヘッダー設定
```

## ビルドコマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルドプレビュー
npm run preview

# 型チェック
npm run check

# ビルドクリーン
npm run clean
```

## Amplifyデプロイ設定

### amplify.yml
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - nvm use 20
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## 環境変数

Amplifyコンソールで設定：
- `VITE_LAMBDA_FUNCTION_URL` - Lambda Function URL

## デプロイ手順

1. **GitHubにプッシュ**
   ```bash
   git add .
   git commit -m "Update project structure"
   git push origin main
   ```

2. **Amplifyが自動ビルド**
   - GitHubへのプッシュで自動トリガー
   - ビルドログをAmplifyコンソールで確認

3. **Lambda関数のデプロイ（別途）**
   ```bash
   sam build
   sam deploy --profile addvalueagent
   ```

## 削除されたファイル/ディレクトリ

- `client/` - ルートに統合
- `server/` - 不要（Lambdaを使用）
- `api/` - 不要
- `pages/` - 不要（Next.js用）
- `next.config.js` - 不要
- `vercel.json` - 不要
- `dev-server.js` - 不要

## 注意事項

1. **Node.js バージョン**
   - 20.x以上が必要

2. **ビルド出力**
   - `dist/`ディレクトリに出力
   - index.htmlとアセットが含まれる

3. **SPA対応**
   - `public/_redirects`でクライアントサイドルーティング対応

4. **Lambda関数**
   - 別途SAMでデプロイ
   - Function URLsを使用（API Gateway不要）