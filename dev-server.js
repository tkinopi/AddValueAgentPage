import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 環境変数を読み込み
dotenv.config();

const app = express();
const PORT = 3001;

// ミドルウェア
app.use(cors());
app.use(express.json());

// お問い合わせAPIエンドポイント
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Contact form submission:', req.body);
    
    const { name, email, company, phone, inquiry_type, message } = req.body;
    
    // 基本バリデーション
    if (!name || !email || !message || !inquiry_type) {
      return res.status(400).json({
        success: false,
        message: '必須項目を入力してください。'
      });
    }
    
    // メールバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: '有効なメールアドレスを入力してください。'
      });
    }
    
    // 開発環境では実際のメール送信をスキップ
    console.log('📧 Mock email sending...');
    console.log('To:', process.env.CONTACT_EMAIL || process.env.GMAIL_USER);
    console.log('From:', email);
    console.log('Subject: お問い合わせ -', name);
    
    // 成功レスポンス
    res.json({
      success: true,
      message: '開発環境: お問い合わせを受け付けました。（実際のメール送信はスキップされています）',
      inquiryId: 'dev-' + Date.now()
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: '送信中にエラーが発生しました。もう一度お試しください。'
    });
  }
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`🚀 Development API server running on http://localhost:${PORT}`);
  console.log('📧 Gmail User:', process.env.GMAIL_USER);
  console.log('📧 Contact Email:', process.env.CONTACT_EMAIL);
});