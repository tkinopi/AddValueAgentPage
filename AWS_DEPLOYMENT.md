# AWS Amplify & Lambda デプロイ手順

## 前提条件

- AWS CLIがインストールされていること
- AWS SAM CLIがインストールされていること
- AWSアカウントの認証情報が設定されていること
- Node.js 18.x以上がインストールされていること
- AWSアカウントとIAMユーザーが作成されていること

## 1. AWS認証情報の設定

### 1.1 IAMユーザーの作成（AWSコンソール）

1. AWSコンソールにログイン
2. IAMサービスに移動
3. 「ユーザー」→「ユーザーを追加」
4. ユーザー名を入力（例：`addvalue-deploy-user`）
5. 「プログラムによるアクセス」にチェック
6. 以下のポリシーをアタッチ：
   - `AWSLambdaFullAccess`
   - `AmazonAPIGatewayAdministrator`
   - `AWSCloudFormationFullAccess`
   - `IAMFullAccess`
   - `AmazonS3FullAccess`
   - `AmplifyFullAccess`
7. アクセスキーIDとシークレットアクセスキーを保存

### 1.2 AWS CLIの設定

```bash
# AWS CLIをインストール（まだの場合）
brew install awscli

# AWS認証情報を設定
aws configure

# 以下を入力：
AWS Access Key ID [None]: YOUR_ACCESS_KEY_ID
AWS Secret Access Key [None]: YOUR_SECRET_ACCESS_KEY
Default region name [None]: ap-northeast-1
Default output format [None]: json
```

### 1.3 認証情報の確認

```bash
# 設定が正しいか確認
aws sts get-caller-identity

# 以下のような出力が表示されれば成功
{
    "UserId": "AIDACKCEVSQ6C2EXAMPLE",
    "Account": "123456789012",
    "Arn": "arn:aws:iam::123456789012:user/addvalue-deploy-user"
}
```

## 2. AWS SAM CLIのインストール

```bash
# macOS (Homebrew)
brew install aws-sam-cli

# または公式インストーラーを使用
# https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html

# インストール確認
sam --version
```

## 3. バックエンド（Lambda Function URLs）のデプロイ

### 3.1 Lambda関数の依存関係をインストール

```bash
cd lambda/contact
npm install
cd ../..
```

### 3.2 SAMテンプレートの設定を更新

`samconfig.toml`ファイルを編集して、実際の値に置き換えます：

```toml
parameter_overrides = [
    "Environment=production",
    "AllowedOrigin=https://main.your-app-id.amplifyapp.com",  # Amplifyのドメインに変更
    "GmailUser=your-email@gmail.com",                         # 実際のGmailアドレス
    "GmailAppPassword=your-app-password",                     # Gmailアプリパスワード
    "RecipientEmail=info@addvalue-agent.co.jp"                # 受信用メールアドレス
]
```

### 3.3 S3バケットの作成（初回のみ）

SAMがデプロイ用のアーティファクトを保存するS3バケットが必要です：

```bash
# S3バケットを作成（バケット名は一意である必要があります）
aws s3 mb s3://addvalue-sam-deployments-bucket-YOUR_ACCOUNT_ID

# samconfig.tomlのs3_bucketを更新
s3_bucket = "addvalue-sam-deployments-bucket-YOUR_ACCOUNT_ID"
```

### 3.4 SAMでビルドとデプロイ

```bash
# ビルド
sam build

# 初回デプロイ（対話形式）
sam deploy --guided

# 2回目以降のデプロイ
sam deploy
```

デプロイが完了すると、Lambda Function URLが出力されます。このURLをメモしておきます。

例: `https://xxxxxxxxxx.lambda-url.ap-northeast-1.on.aws/`

## 4. フロントエンド（AWS Amplify）のデプロイ

### 4.1 Amplifyアプリの作成

1. AWS Amplifyコンソールにアクセス
2. 「新しいアプリケーション」→「ウェブアプリケーションをホスト」を選択
3. GitHubリポジトリを接続
4. ブランチを選択（main）
5. ビルド設定は自動的に`amplify.yml`を検出

### 4.2 環境変数の設定

Amplifyコンソールで以下の環境変数を設定：

1. アプリ設定 → 環境変数に移動
2. 以下の変数を追加：

```
VITE_LAMBDA_FUNCTION_URL = https://xxxxxxxxxx.lambda-url.ap-northeast-1.on.aws/
```

※ `VITE_LAMBDA_FUNCTION_URL`には、手順3.4で取得したLambda Function URLを設定

### 4.3 フロントエンドコードの更新

`client/src/lib/queryClient.ts`を編集して、API URLを環境変数から取得するように更新：

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const submitContactForm = async (data: ContactFormData) => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'お問い合わせの送信に失敗しました');
  }
  
  return response.json();
};
```

### 4.4 デプロイ

```bash
# 変更をコミット
git add .
git commit -m "Configure AWS deployment"
git push origin main
```

Amplifyは自動的にビルドとデプロイを開始します。

## 5. Gmailアプリパスワードの設定

Lambda関数からGmailを使用するため、アプリパスワードを設定：

1. Googleアカウントの設定にアクセス
2. セキュリティ → 2段階認証を有効化
3. アプリパスワードを生成
4. 生成されたパスワードをLambda環境変数に設定

## 6. 動作確認

### 6.1 API Gatewayのテスト

```bash
# CORSプリフライトのテスト
curl -X OPTIONS https://your-api-gateway-url/api/contact

# POSTリクエストのテスト
curl -X POST https://your-api-gateway-url/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "テスト太郎",
    "email": "test@example.com",
    "message": "テストメッセージ"
  }'
```

### 6.2 Amplifyアプリの確認

1. Amplifyコンソールでアプリのドメインを確認
2. ブラウザでアクセスして動作確認
3. お問い合わせフォームから送信テスト

## 7. カスタムドメインの設定（オプション）

### 7.1 Amplifyでカスタムドメイン設定

1. Amplifyコンソール → ドメイン管理
2. ドメインを追加
3. DNSレコードを設定

### 7.2 API Gatewayでカスタムドメイン設定

1. API Gatewayコンソール → カスタムドメイン名
2. ドメインを作成
3. ACM証明書を選択
4. APIマッピングを設定

## 8. 監視とログ

### CloudWatchでの監視

- Lambda関数のログ: `/aws/lambda/addvalue-agent-backend-ContactFunction-xxx`
- API Gatewayのログ: API Gateway → ステージ → ログ/トレース

### Amplifyのビルドログ

- Amplifyコンソール → ビルド履歴

## トラブルシューティング

### よくある問題と解決方法

1. **CORS エラー**
   - `AllowedOrigin`環境変数がAmplifyのドメインと一致しているか確認
   - API GatewayでCORS設定が有効になっているか確認

2. **メール送信失敗**
   - Gmailアプリパスワードが正しいか確認
   - Gmail側で「安全性の低いアプリのアクセス」が許可されているか確認

3. **ビルドエラー**
   - Node.jsのバージョンを確認（18.x以上）
   - `npm ci`で依存関係を再インストール

4. **環境変数が反映されない**
   - Amplifyの場合：再デプロイが必要
   - Lambdaの場合：`sam deploy`を再実行

## セキュリティのベストプラクティス

### 認証情報の管理

1. **アクセスキーの保護**
   - アクセスキーをコードにハードコードしない
   - `.gitignore`に`.aws/credentials`を追加
   - 定期的にアクセスキーをローテーション

2. **最小権限の原則**
   - デプロイ用IAMユーザーには必要最小限の権限のみ付与
   - 本番環境では以下のようなカスタムポリシーを作成：
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "lambda:CreateFunction",
           "lambda:UpdateFunctionCode",
           "lambda:UpdateFunctionConfiguration",
           "lambda:GetFunction",
           "lambda:AddPermission",
           "apigateway:*",
           "cloudformation:*",
           "iam:CreateRole",
           "iam:AttachRolePolicy",
           "iam:PutRolePolicy",
           "iam:PassRole",
           "s3:*"
         ],
         "Resource": "*"
       }
     ]
   }
   ```

## その他のセキュリティ対策

1. **環境変数の管理**
   - AWS Systems Manager Parameter Storeを使用
   - AWS Secrets Managerで機密情報を管理

2. **API保護**
   - API Gatewayでレート制限を設定
   - 必要に応じてAPI Keyやカスタム認証を追加

3. **ログの管理**
   - CloudWatch Logsの保持期間を設定
   - 個人情報を含むログの出力を避ける

## コスト最適化

1. **Lambda**
   - メモリサイズを適切に設定（デフォルト: 128MB）
   - 同時実行数の制限を設定

2. **Amplify**
   - ビルド時間を最適化
   - 不要なブランチのビルドを無効化

3. **CloudWatch**
   - ログの保持期間を適切に設定
   - 不要なメトリクスを無効化