const nodemailer = require('nodemailer');

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
};

// Lambda handler for Function URL
exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  
  // CORS headers - Function URLではこれらのヘッダーを返す必要があります
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Methods': 'OPTIONS,POST'
  };

  // Handle preflight OPTIONS request
  if (event.requestContext?.http?.method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight response' })
    };
  }

  // Only accept POST requests
  if (event.requestContext?.http?.method !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed. Only POST is supported.' })
    };
  }

  try {
    // Parse request body
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Name, email, and message are required' })
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }

    // Create email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER,
      subject: `【お問い合わせ】${name}様より`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">お名前</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">メールアドレス</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">電話番号</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone || '未入力'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">会社名</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${company || '未入力'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">お問い合わせ内容</td>
            <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666;">
          このメールは自動送信されています。<br>
          お問い合わせ日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
        </p>
      `
    };

    // Send auto-reply to customer
    const autoReplyOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: '【株式会社アドバリューエージェント】お問い合わせありがとうございます',
      html: `
        <div style="font-family: 'Noto Sans JP', sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d;">${name} 様</h2>
          
          <p>この度は、株式会社アドバリューエージェントへお問い合わせいただき、誠にありがとうございます。</p>
          
          <p>以下の内容でお問い合わせを承りました。</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            <p><strong>電話番号:</strong> ${phone || '未入力'}</p>
            <p><strong>会社名:</strong> ${company || '未入力'}</p>
            <p><strong>お問い合わせ内容:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 10px; border-radius: 3px;">${message}</p>
          </div>
          
          <p>担当者より3営業日以内にご連絡させていただきます。</p>
          <p>お急ぎの場合は、お電話でもお問い合わせを承っております。</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          
          <div style="color: #666; font-size: 14px;">
            <p><strong>株式会社アドバリューエージェント</strong></p>
            <p>〒651-2112 兵庫県神戸市西区大津和2丁目8番2号</p>
            <p>Email: info@addvalue-agent.co.jp</p>
          </div>
          
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            ※このメールは自動送信されています。このメールに返信されても確認できませんのでご了承ください。
          </p>
        </div>
      `
    };

    // Create transporter and send emails
    const transporter = createTransporter();
    
    // Send notification email
    await transporter.sendMail(mailOptions);
    
    // Send auto-reply
    await transporter.sendMail(autoReplyOptions);

    // Log the inquiry for monitoring
    console.log('Contact inquiry processed:', {
      name,
      email,
      company,
      timestamp: new Date().toISOString()
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'お問い合わせを受け付けました。確認メールをお送りしましたのでご確認ください。'
      })
    };

  } catch (error) {
    console.error('Error processing contact inquiry:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'お問い合わせの送信に失敗しました。しばらく時間をおいて再度お試しください。',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    };
  }
};