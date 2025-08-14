# Resendメール送信設定ガイド

## 概要
`info@addvalueagent.com`から送信可能なメールシステムをResendを使って構築する手順書です。

### Resendを選ぶ理由
- ✅ **無料枠が充実**: 月3,000通まで無料
- ✅ **独自ドメイン対応**: info@addvalueagent.comから送信可能
- ✅ **設定が簡単**: DNSレコード追加のみ
- ✅ **高い到達率**: SPF/DKIM/DMARC対応
- ✅ **Next.js対応**: 公式SDKあり

## セットアップ手順

### Step 1: Resendアカウント作成

1. [resend.com](https://resend.com)にアクセス
2. 「Start for free」をクリック
3. メールアドレスまたはGitHubアカウントで登録
4. メールアドレスを確認

### Step 2: APIキー取得

1. Resendダッシュボードにログイン
2. 左メニューから「API Keys」を選択
3. 「Create API Key」をクリック
4. 設定内容：
   - **Name**: `Production` または `Amplify`
   - **Permission**: `Full access`
5. 生成されたAPIキーをコピー（例: `re_123abc...`）

⚠️ **重要**: APIキーは一度しか表示されません。必ず安全な場所に保存してください。

### Step 3: ドメイン追加

1. Resendダッシュボードで「Domains」を選択
2. 「Add Domain」をクリック
3. 設定内容：
   - **Domain**: `addvalueagent.com`
   - **Region**: `US East (N. Virginia)`
4. 「Add」をクリック

### Step 4: DNS設定

Resendが表示するDNSレコードをドメインのDNS管理画面に追加します。

#### 必要なDNSレコード

```
# 1. DKIM認証用（メール認証）
Type: TXT
Name: resend._domainkey
Value: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNA... (Resendが提供する長い文字列)

# 2. ドメイン認証用
Type: TXT
Name: @ (またはaddvalueagent.com)
Value: resend-verification=d1234567890abcdef (Resendが提供)

# 3. メール送信用（オプション - サブドメインから送信する場合）
Type: MX
Name: send
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10
```

#### お名前.comでの設定方法

1. [お名前.com Navi](https://navi.onamae.com/)にログイン
2. ドメイン一覧から`addvalueagent.com`を選択
3. 「DNS設定」→「DNSレコード設定」を選択
4. 各レコードを追加：

**TXTレコード1（DKIM）:**
```
ホスト名: resend._domainkey
TYPE: TXT
VALUE: "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNA..." 
TTL: 3600
```

**TXTレコード2（ドメイン認証）:**
```
ホスト名: （空欄）
TYPE: TXT
VALUE: "resend-verification=d1234567890abcdef"
TTL: 3600
```

5. 「確認画面へ進む」→「設定する」

#### Cloudflareでの設定方法

1. [Cloudflareダッシュボード](https://dash.cloudflare.com/)にログイン
2. 対象ドメインを選択
3. 「DNS」タブをクリック
4. 「+ Add record」で各レコードを追加：

```
Type: TXT
Name: resend._domainkey
Content: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNA...
TTL: Auto
Proxy status: DNS only

Type: TXT
Name: @
Content: resend-verification=d1234567890abcdef
TTL: Auto
Proxy status: DNS only
```

### Step 5: DNS認証確認

1. **Resendダッシュボードで確認**
   - Domains画面で`addvalueagent.com`の横に「✓ Verified」が表示されるまで待つ
   - 通常5-30分、最大48時間かかる場合があります

2. **コマンドラインで確認**
   ```bash
   # DKIMレコードの確認
   dig TXT resend._domainkey.addvalueagent.com

   # 認証レコードの確認
   dig TXT addvalueagent.com | grep resend
   ```

### Step 6: Amplify環境変数設定

1. AWS Amplifyコンソールにログイン
2. アプリを選択
3. 「環境変数」→「管理」をクリック
4. 以下の環境変数を追加：

```
RESEND_API_KEY = re_123abc... (Step 2でコピーしたAPIキー)
CONTACT_EMAIL = info@addvalueagent.com (受信したいメールアドレス)
USE_RESEND = true (Resendを使用する場合)
```

5. 「保存」をクリック
6. 「Redeploy this version」で再デプロイ

### Step 7: コード実装

#### API Route (`/pages/api/contact-resend.ts`)
すでに実装済み。主な機能：
- Resend SDKを使用したメール送信
- 管理者への通知メール
- 顧客への自動返信メール
- エラーハンドリング

#### フロントエンド切り替え
```javascript
// 環境変数で切り替え
const apiEndpoint = process.env.NEXT_PUBLIC_USE_RESEND === 'true' 
  ? '/api/contact-resend' 
  : '/api/contact';
```

## テスト方法

### DNS認証前のテスト
```javascript
// test-resend.js
const { Resend } = require('resend');
const resend = new Resend('re_YOUR_API_KEY');

async function test() {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev', // 認証前はこれを使用
    to: 'your-email@example.com',
    subject: 'テストメール',
    html: '<p>Resendテスト</p>'
  });
  
  console.log(error ? error : data);
}

test();
```

実行:
```bash
RESEND_API_KEY=re_xxx node test-resend.js
```

### DNS認証後のテスト
fromを`info@addvalueagent.com`に変更して送信

## トラブルシューティング

### よくあるエラーと解決方法

| エラー | 原因 | 解決方法 |
|--------|------|----------|
| Domain not verified | DNS設定が反映されていない | 48時間待つか、DNS設定を再確認 |
| Invalid API Key | APIキーが間違っている | Amplify環境変数を確認 |
| From address not allowed | DNS認証が完了していない | onboarding@resend.devを使用 |
| Rate limit exceeded | 送信制限に達した | 無料プラン: 1秒1通、1日100通まで |

### DNS伝播の確認
```bash
# macOS/Linux
nslookup -type=TXT resend._domainkey.addvalueagent.com

# オンラインツール
# https://toolbox.googleapps.com/apps/dig/
```

## 料金プラン

| プラン | 月額 | 送信数 | 機能 |
|--------|------|--------|------|
| Free | $0 | 3,000通/月<br>100通/日 | 基本機能すべて |
| Pro | $20 | 50,000通/月 | 優先サポート<br>チーム機能 |
| Enterprise | カスタム | 無制限 | SLA保証<br>専任サポート |

## 移行スケジュール例

1. **Week 1**: Resendアカウント作成、DNS設定
2. **Week 2**: 開発環境でテスト（onboarding@resend.dev使用）
3. **Week 3**: DNS認証完了後、本番環境でテスト
4. **Week 4**: 完全移行

## セキュリティベストプラクティス

1. **APIキーの管理**
   - 環境変数に保存（コードにハードコーディングしない）
   - 定期的にローテーション
   - 本番用と開発用を分ける

2. **送信元アドレス**
   - SPF/DKIM/DMARCを設定
   - noreply@とinfo@を使い分ける

3. **レート制限**
   - 送信数の監視
   - エラーハンドリングの実装

## 関連リンク

- [Resend公式ドキュメント](https://resend.com/docs)
- [Next.js Integration Guide](https://resend.com/docs/send-with-nextjs)
- [DNS設定ガイド](https://resend.com/docs/dashboard/domains/introduction)
- [APIリファレンス](https://resend.com/docs/api-reference/introduction)

## サポート

問題が発生した場合：
1. Resendダッシュボードのログを確認
2. [Resend Status Page](https://status.resend.com/)でサービス状態を確認
3. support@resend.comに問い合わせ（英語）

---

最終更新: 2025年8月12日