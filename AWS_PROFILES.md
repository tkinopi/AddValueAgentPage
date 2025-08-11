# AWS 複数プロファイルの管理

## AWS CLIのインストール

```bash
# macOS (Homebrew)
brew install awscli

# インストール確認
aws --version
```

## 現在の設定を確認

### 1. 現在のデフォルト設定を確認

```bash
# 現在の設定を表示
aws configure list

# 出力例：
#       Name                    Value             Type    Location
#       ----                    -----             ----    --------
#    profile                <not set>             None    None
# access_key     ****************ABCD shared-credentials-file
# secret_key     ****************WXYZ shared-credentials-file
#     region           ap-northeast-1      config-file    ~/.aws/config
```

### 2. 設定ファイルの内容を確認

```bash
# 認証情報を確認（アクセスキーとシークレットキー）
cat ~/.aws/credentials

# 設定を確認（リージョンなど）
cat ~/.aws/config
```

### 3. 現在使用中のアカウント情報を確認

```bash
# 現在の認証情報でアカウント情報を取得
aws sts get-caller-identity

# 出力例：
# {
#     "UserId": "AIDACKCEVSQ6C2EXAMPLE",
#     "Account": "123456789012",
#     "Arn": "arn:aws:iam::123456789012:user/username"
# }
```

## 複数プロファイルの設定

### 1. プロファイルを追加（対話形式）

```bash
# デフォルトプロファイルの設定
aws configure

# 名前付きプロファイルの追加（例：personal）
aws configure --profile personal

# 別のプロファイルを追加（例：work）
aws configure --profile work

# 各プロファイルで以下を入力：
# AWS Access Key ID [None]: YOUR_ACCESS_KEY_ID
# AWS Secret Access Key [None]: YOUR_SECRET_ACCESS_KEY
# Default region name [None]: ap-northeast-1
# Default output format [None]: json
```

### 2. 手動でファイルを編集

#### ~/.aws/credentials ファイル

```ini
[default]
aws_access_key_id = DEFAULT_ACCESS_KEY_ID
aws_secret_access_key = DEFAULT_SECRET_ACCESS_KEY

[personal]
aws_access_key_id = PERSONAL_ACCESS_KEY_ID
aws_secret_access_key = PERSONAL_SECRET_ACCESS_KEY

[work]
aws_access_key_id = WORK_ACCESS_KEY_ID
aws_secret_access_key = WORK_SECRET_ACCESS_KEY

[addvalue-deploy]
aws_access_key_id = ADDVALUE_ACCESS_KEY_ID
aws_secret_access_key = ADDVALUE_SECRET_ACCESS_KEY
```

#### ~/.aws/config ファイル

```ini
[default]
region = ap-northeast-1
output = json

[profile personal]
region = us-west-2
output = json

[profile work]
region = ap-northeast-1
output = table

[profile addvalue-deploy]
region = ap-northeast-1
output = json
```

## プロファイルの使用方法

### 1. コマンドラインでプロファイルを指定

```bash
# personalプロファイルを使用
aws s3 ls --profile personal

# workプロファイルを使用
aws ec2 describe-instances --profile work

# addvalue-deployプロファイルを使用してデプロイ
aws cloudformation list-stacks --profile addvalue-deploy
```

### 2. 環境変数でプロファイルを設定

```bash
# 一時的にプロファイルを設定
export AWS_PROFILE=personal
aws s3 ls  # personalプロファイルが使用される

# プロファイルを切り替え
export AWS_PROFILE=work
aws ec2 describe-instances  # workプロファイルが使用される

# デフォルトに戻す
unset AWS_PROFILE
```

### 3. SAMでプロファイルを使用

```bash
# SAMデプロイ時にプロファイルを指定
sam deploy --profile addvalue-deploy

# または samconfig.toml に設定
# samconfig.toml
[default.deploy.parameters]
profile = "addvalue-deploy"
```

## プロファイルの管理

### 1. プロファイル一覧の確認

```bash
# 設定されているプロファイルの一覧
aws configure list-profiles
```

### 2. 特定のプロファイルの設定を確認

```bash
# personalプロファイルの設定を確認
aws configure list --profile personal
```

### 3. プロファイルの認証情報を確認

```bash
# 各プロファイルでアカウント情報を確認
aws sts get-caller-identity --profile personal
aws sts get-caller-identity --profile work
aws sts get-caller-identity --profile addvalue-deploy
```

## セキュリティのベストプラクティス

### 1. ファイルの権限設定

```bash
# 認証情報ファイルの権限を制限
chmod 600 ~/.aws/credentials
chmod 600 ~/.aws/config
```

### 2. gitignoreの設定

`.gitignore` に以下を追加：

```
# AWS credentials
.aws/
aws/credentials
aws/config
```

### 3. プロファイルの命名規則

推奨される命名規則：
- `default` - 個人用のデフォルトアカウント
- `personal` - 個人のAWSアカウント
- `work` - 会社のAWSアカウント
- `project-name-env` - プロジェクト別（例：`addvalue-prod`, `addvalue-dev`）
- `client-name` - クライアント別

## よくある使用例

### 1. 開発環境と本番環境の切り替え

```bash
# 開発環境用プロファイル
aws configure --profile addvalue-dev
# 本番環境用プロファイル
aws configure --profile addvalue-prod

# 開発環境でテスト
aws lambda list-functions --profile addvalue-dev

# 本番環境にデプロイ
sam deploy --profile addvalue-prod
```

### 2. スクリプトでの使用

```bash
#!/bin/bash
# deploy.sh

# プロファイルを引数で指定
PROFILE=${1:-default}

echo "Using AWS Profile: $PROFILE"
aws sts get-caller-identity --profile $PROFILE

# デプロイ実行
sam build
sam deploy --profile $PROFILE
```

使用方法：
```bash
./deploy.sh addvalue-prod
```

### 3. Node.jsでの使用

```javascript
// AWS SDKでプロファイルを指定
const AWS = require('aws-sdk');

// プロファイルを指定
const credentials = new AWS.SharedIniFileCredentials({profile: 'addvalue-deploy'});
AWS.config.credentials = credentials;
AWS.config.region = 'ap-northeast-1';

// S3クライアントの作成
const s3 = new AWS.S3();
```

## トラブルシューティング

### 1. プロファイルが見つからない

```bash
# エラー: The config profile (work) could not be found
# 解決: プロファイルを作成
aws configure --profile work
```

### 2. 認証エラー

```bash
# エラー: Unable to locate credentials
# 解決: 環境変数を確認
echo $AWS_PROFILE
unset AWS_PROFILE  # リセット
```

### 3. 権限エラー

```bash
# エラー: permission denied
# 解決: ファイル権限を修正
chmod 600 ~/.aws/credentials
```

## プロファイルの削除

```bash
# 手動でファイルを編集して該当セクションを削除
vim ~/.aws/credentials
vim ~/.aws/config

# または特定のプロファイルの設定をクリア
aws configure set aws_access_key_id "" --profile old-profile
aws configure set aws_secret_access_key "" --profile old-profile
```