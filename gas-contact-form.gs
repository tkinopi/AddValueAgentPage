// Google Apps Script コード

// ムームードメインのメールアドレスを設定
const RECIPIENT_EMAIL = 'your-email@your-domain.com'; // ムームードメインのメールアドレスに変更
const SHEET_NAME = 'お問い合わせ';

function doPost(e) {
  try {
    // パラメータを取得
    const params = JSON.parse(e.postData.contents);
    
    // スプレッドシートに記録
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const timestamp = new Date();
    
    sheet.appendRow([
      timestamp,
      params.name,
      params.email,
      params.phone || '',
      params.message
    ]);
    
    // メール送信
    sendEmail(params, timestamp);
    
    // 成功レスポンス
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'お問い合わせを受け付けました。'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // エラーレスポンス
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'エラーが発生しました。',
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmail(params, timestamp) {
  const subject = `【お問い合わせ】${params.name}様より`;
  
  const body = `
新しいお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ詳細
━━━━━━━━━━━━━━━━━━━━━━━━

受信日時: ${Utilities.formatDate(timestamp, 'JST', 'yyyy/MM/dd HH:mm:ss')}

お名前: ${params.name}
メールアドレス: ${params.email}
電話番号: ${params.phone || 'なし'}

【お問い合わせ内容】
${params.message}

━━━━━━━━━━━━━━━━━━━━━━━━

このメールは自動送信されています。
スプレッドシート: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
`;

  // 管理者へメール送信
  GmailApp.sendEmail(
    RECIPIENT_EMAIL,
    subject,
    body,
    {
      replyTo: params.email,
      name: 'お問い合わせフォーム'
    }
  );
  
  // 自動返信メール（オプション）
  if (params.email) {
    sendAutoReply(params);
  }
}

function sendAutoReply(params) {
  const subject = 'お問い合わせありがとうございます';
  
  const body = `
${params.name} 様

この度はお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを承りました。

━━━━━━━━━━━━━━━━━━━━━━━━
【お問い合わせ内容】
${params.message}
━━━━━━━━━━━━━━━━━━━━━━━━

担当者より2営業日以内にご連絡させていただきます。
今しばらくお待ちください。

※このメールは自動返信です。

━━━━━━━━━━━━━━━━━━━━━━━━
株式会社アドバリューエージェント
メール: ${RECIPIENT_EMAIL}
━━━━━━━━━━━━━━━━━━━━━━━━
`;

  GmailApp.sendEmail(
    params.email,
    subject,
    body,
    {
      replyTo: RECIPIENT_EMAIL,
      name: '株式会社アドバリューエージェント'
    }
  );
}

// CORS対応
function doOptions() {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

// テスト用関数
function testEmail() {
  sendEmail({
    name: 'テスト太郎',
    email: 'test@example.com',
    phone: '090-1234-5678',
    message: 'これはテストメッセージです。'
  }, new Date());
}