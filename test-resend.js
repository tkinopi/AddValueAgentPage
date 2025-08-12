// Resend送信テストスクリプト
// 使い方: RESEND_API_KEY=re_xxx node test-resend.js

const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function testSend() {
  try {
    // DNS認証前はonboarding@resend.devから送信
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // DNS認証前はこれを使用
      // from: 'info@addvalueagent.com', // DNS認証後はこちら
      to: 'test@example.com', // テスト用受信アドレス
      subject: 'Resend送信テスト',
      html: '<p>これはResendからのテストメールです。</p>'
    });

    if (error) {
      console.error('エラー:', error);
    } else {
      console.log('送信成功:', data);
    }
  } catch (err) {
    console.error('送信失敗:', err);
  }
}

testSend();