# Amplify プラットフォーム設定の修正手順

## 問題の根本原因

AmplifyがアプリケーションをNext.js（SSR）として誤認識しているため、以下のエラーが発生：
- `Can't find required-server-files.json`
- `Server trace files are not found`

これは、AmplifyがデフォルトでNext.jsプロジェクトと判定し、`WEB_COMPUTE`プラットフォームで実行しようとするためです。

## 解決方法

### 1. Amplifyコンソールでの設定変更（最重要）

1. **AWS Amplifyコンソールにログイン**
2. **該当アプリケーションを選択**
3. **「アプリの設定」→「ビルド設定」に移動**
4. **「アプリケーションのビルド仕様」セクションで「編集」をクリック**
5. **以下の設定を確認・変更：**

#### プラットフォーム設定
```yaml
platform: WEB  # WEB_COMPUTEではなくWEBを選択
```

#### フレームワーク設定
```yaml
framework: React  # Next.jsではなくReactを選択
```

### 2. ビルド設定の編集

Amplifyコンソールで、ビルド設定を以下のように変更：

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
    baseDirectory: client/dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### 3. 環境変数の設定

「環境変数」セクションで以下を追加：

```
_DEPLOY_PLATFORM = WEB
AMPLIFY_MONOREPO_APP_ROOT = .
```

### 4. アプリケーションの再デプロイ

1. **「再デプロイ」ボタンをクリック**
2. **または、新しいコミットをプッシュ**

## コマンドラインでの確認

AWS CLIを使用して設定を確認・変更する場合：

```bash
# アプリケーション情報の取得
aws amplify get-app --app-id YOUR_APP_ID

# プラットフォーム設定の更新
aws amplify update-app \
  --app-id YOUR_APP_ID \
  --platform WEB \
  --enable-branch-auto-build
```

## ファイル構成

プロジェクトに以下のファイルが存在することを確認：

```
AddValueAgentPage/
├── amplify.yml          # シンプルなSPA用設定
├── amplify.json         # プラットフォーム設定（WEB）
├── customHttp.yml       # カスタムヘッダー設定
├── package.json         # Node.js 20+を指定
├── client/
│   ├── dist/           # ビルド出力
│   │   ├── index.html
│   │   └── _redirects  # SPAリダイレクト
│   └── vite.config.ts  # Vite設定
└── lambda/             # バックエンド（別途デプロイ）
```

## トラブルシューティング

### エラーが継続する場合

1. **ブランチを削除して再作成**
   ```bash
   # Amplifyコンソールでブランチを削除
   # GitHubで新しいブランチを作成
   git checkout -b amplify-fix
   git push origin amplify-fix
   # Amplifyで新しいブランチを接続（WEBプラットフォームを選択）
   ```

2. **新しいAmplifyアプリを作成**
   - 最初から「Hosting」→「Without Git provider」を選択
   - プラットフォームで「Web hosting only」を選択
   - その後GitHubを接続

3. **AWS サポートに連絡**
   - プラットフォーム設定が変更できない場合
   - エラーが継続する場合

## 確認ポイント

- [ ] amplify.ymlがシンプルなSPA設定になっている
- [ ] Next.js関連のファイル（next.config.js等）が存在しない
- [ ] package.jsonに`next`依存関係がない
- [ ] ビルド出力がclient/distに生成される
- [ ] index.htmlが存在する
- [ ] _redirectsファイルでSPAルーティングを設定

## 成功の確認

デプロイが成功すると：
1. ビルドログに「Server trace files」エラーが表示されない
2. アプリケーションが正常に表示される
3. クライアントサイドルーティングが機能する

## 参考リンク

- [AWS Amplify Hosting platforms](https://docs.aws.amazon.com/amplify/latest/userguide/platform-specific-settings.html)
- [Migrating from SSR to SPA](https://docs.aws.amazon.com/amplify/latest/userguide/migrate-ssr-to-spa.html)
- [Custom headers configuration](https://docs.aws.amazon.com/amplify/latest/userguide/custom-headers.html)