# デプロイ手順

## 前提条件の確認
1. AWS CLIが設定済み
2. SAM CLIがインストール済み
3. AWS認証情報が設定済み

## 1. ビルドの実行

```bash
# Lambda関数の依存関係をインストール
cd lambda/contact
npm install
cd ../..

# SAMビルド
sam build
```

✅ ビルドが成功しました

## 2. デプロイ前の設定確認

### samconfig.tomlの更新が必要な項目：
1. `s3_bucket` - S3バケット名（作成済み）
2. `AllowedOrigin` - AmplifyアプリのURL
3. `GmailUser` - Gmailアドレス
4. `GmailAppPassword` - Gmailアプリパスワード
5. `RecipientEmail` - 受信用メールアドレス

## 3. デプロイ実行

### 初回デプロイ（対話形式）
```bash
sam deploy --guided
```

以下の質問に答える：
- Stack Name [addvalue-agent-backend]: そのままEnter
- AWS Region [ap-northeast-1]: そのままEnter
- Parameter Environment [production]: そのままEnter
- Parameter AllowedOrigin: AmplifyのURLを入力
- Parameter GmailUser: Gmailアドレスを入力
- Parameter GmailAppPassword: アプリパスワードを入力
- Parameter RecipientEmail: 受信メールアドレスを入力
- Confirm changes before deploy [Y/n]: Y
- Allow SAM CLI IAM role creation [Y/n]: Y
- Disable rollback [y/N]: N
- Save arguments to configuration file [Y/n]: Y
- SAM configuration file [samconfig.toml]: そのままEnter
- SAM configuration environment [default]: そのままEnter

### 2回目以降のデプロイ
```bash
sam deploy
```

## 4. デプロイ結果の確認

デプロイ完了後、以下の情報が表示されます：
```
Outputs:
- ApiUrl: https://xxxxx.execute-api.ap-northeast-1.amazonaws.com/production
- ContactFunctionArn: arn:aws:lambda:ap-northeast-1:xxxxx:function:xxxxx
```

このApiUrlをメモしてください。

## 5. API動作確認

```bash
# API URLを環境変数に設定（実際のURLに置き換え）
export API_URL="https://xxxxx.execute-api.ap-northeast-1.amazonaws.com/production"

# テストリクエスト
curl -X POST $API_URL/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "テスト太郎",
    "email": "test@example.com",
    "message": "テストメッセージ"
  }'
```

## 6. Amplifyの環境変数設定

1. AWS Amplifyコンソールにアクセス
2. アプリを選択
3. 「アプリの設定」→「環境変数」
4. 以下を追加：
   - 変数名: `VITE_API_URL`
   - 値: 上記でメモしたAPI URL

## 7. フロントエンドの再デプロイ

```bash
git add .
git commit -m "Configure API endpoint"
git push origin main
```

Amplifyが自動的に再ビルド・デプロイを実行します。

## トラブルシューティング

### エラー: SESCrudPolicy
- 解決済み: template.yamlからSESCrudPolicyを削除

### エラー: Region not found
- 解決: `--region ap-northeast-1` を追加

### エラー: S3 bucket does not exist
- 解決: S3バケットを作成
```bash
aws s3 mb s3://your-bucket-name --region ap-northeast-1
```

### エラー: CORS
- API GatewayのCORS設定を確認
- AllowedOriginがAmplifyのURLと一致しているか確認