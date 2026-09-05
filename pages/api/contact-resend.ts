import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'
import {
  ContactPayload,
  detectSpam,
  escapeHtml,
  isAllowedOrigin,
  resolveRequestOrigin
} from '@/lib/contact-guard'

type ContactResponse = {
  success?: boolean
  message?: string
  error?: string
}

// 送信を受け付けた時にクライアントへ返す文言。
// スパムと判定した送信にも同じ応答を返し、ボットに判定結果を悟らせない。
const ACCEPTED_MESSAGE = 'お問い合わせを受け付けました。確認メールをお送りしましたのでご確認ください。'

// Resendクライアントの初期化は関数内で行う（環境変数の確実な読み込みのため）

// 送信元メールアドレスの設定
// DNS認証前: 'onboarding@resend.dev'を使用
// DNS認証後: 独自ドメインのアドレスを使用
const getFromAddress = (type: 'admin' | 'customer') => {
  const isDNSVerified = process.env.RESEND_DNS_VERIFIED === 'true'
  
  if (!isDNSVerified) {
    // DNS認証前はResendのテストアドレスを使用
    return 'Onboarding <onboarding@resend.dev>'
  }
  
  // DNS認証後は独自ドメインのアドレスを使用
  if (type === 'admin') {
    return process.env.RESEND_FROM_ADMIN || 'お問い合わせフォーム <noreply@addvalueagent.com>'
  } else {
    return process.env.RESEND_FROM_CUSTOMER || 'アドバリューエージェント <info@addvalueagent.com>'
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  // 自サイト以外からのリクエストは受け付けない。
  // 以前は Access-Control-Allow-Origin: '*' だったため、
  // フォーム画面を経由せずに API を直接叩けてしまっていた。
  const requestOrigin = resolveRequestOrigin(
    req.headers.origin,
    req.headers.referer
  )
  const originAllowed = isAllowedOrigin(requestOrigin)

  res.setHeader('Vary', 'Origin')
  if (originAllowed && requestOrigin) {
    res.setHeader('Access-Control-Allow-Origin', requestOrigin)
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  }

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    if (!originAllowed) {
      return res.status(403).json({ error: 'Origin not allowed' })
    }
    return res.status(200).json({ message: 'CORS preflight response' })
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Only POST is supported.' })
  }

  if (!originAllowed) {
    console.warn('Rejected contact request from disallowed origin:', requestOrigin)
    return res.status(403).json({ error: 'Origin not allowed' })
  }

  try {
    const payload = (req.body ?? {}) as ContactPayload
    const { name, furigana, email, phone, company, inquiry_type, message } = payload

    // ボット判定。該当した場合はメールを送らずに正常応答を返す。
    const verdict = detectSpam(payload)
    if (verdict.spam) {
      console.warn('Blocked spam contact submission:', {
        reason: verdict.reason,
        timestamp: new Date().toISOString()
      })
      return res.status(200).json({ success: true, message: ACCEPTED_MESSAGE })
    }

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Debug: Log environment check
    console.log('Environment check:', {
      RESEND_API_KEY: process.env.RESEND_API_KEY ? 'SET' : 'NOT SET',
      RESEND_DNS_VERIFIED: process.env.RESEND_DNS_VERIFIED || 'NOT SET',
      CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'NOT SET',
      NODE_ENV: process.env.NODE_ENV
    })

    // Check if Resend API key is configured
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('Resend API key not configured in environment')
      return res.status(500).json({ 
        error: 'メール設定エラー: Resend APIキーが設定されていません。' 
      })
    }

    // Initialize Resend client with API key
    const resend = new Resend(apiKey)

    // 件名に改行を持ち込ませない
    const subjectName = name.replace(/[\r\n]+/g, ' ').trim()

    // メール本文に埋め込む値は必ずエスケープする（HTMLインジェクション対策）
    const safe = {
      name: escapeHtml(name),
      furigana: escapeHtml(furigana),
      email: escapeHtml(email),
      phone: escapeHtml(phone) || '未入力',
      company: escapeHtml(company) || '未入力',
      inquiry_type: escapeHtml(inquiry_type),
      message: escapeHtml(message)
    }

    // 管理者への通知メール
    const adminEmailHtml = `
      <h2>新しいお問い合わせが届きました</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">お名前</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safe.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">ふりがな</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safe.furigana}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">メールアドレス</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safe.email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">電話番号</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safe.phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">会社名</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safe.company}</td>
        </tr>
        ${inquiry_type ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">お問い合わせ種別</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safe.inquiry_type}</td>
        </tr>
        ` : ''}
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">お問い合わせ内容</td>
          <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${safe.message}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; color: #666;">
        このメールは自動送信されています。<br>
        お問い合わせ日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
      </p>
    `

    // 顧客への自動返信メール
    const customerEmailHtml = `
      <div style="font-family: 'Noto Sans JP', sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a365d;">${safe.name} 様</h2>
        
        <p>この度は、株式会社アドバリューエージェントへお問い合わせいただき、誠にありがとうございます。</p>
        
        <p>以下の内容でお問い合わせを承りました。</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>お名前:</strong> ${safe.name}</p>
          <p><strong>メールアドレス:</strong> ${safe.email}</p>
          <p><strong>電話番号:</strong> ${safe.phone}</p>
          <p><strong>会社名:</strong> ${safe.company}</p>
          ${inquiry_type ? `<p><strong>お問い合わせ種別:</strong> ${safe.inquiry_type}</p>` : ''}
          <p><strong>お問い合わせ内容:</strong></p>
          <p style="white-space: pre-wrap; background-color: white; padding: 10px; border-radius: 3px;">${safe.message}</p>
        </div>
        
        <p>担当者より3営業日以内にご連絡させていただきます。</p>
        <p>お急ぎの場合は、お電話でもお問い合わせを承っております。</p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        
        <div style="color: #666; font-size: 14px;">
          <p><strong>株式会社アドバリューエージェント</strong></p>
          <p>〒651-2112 兵庫県神戸市西区大津和2丁目8番2号</p>
          <p>Email: info@addvalueagent.com</p>
        </div>
        
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          ※このメールは自動送信されています。このメールに返信されても確認できませんのでご了承ください。
        </p>
      </div>
    `

    try {
      // 管理者への通知メール送信
      const adminEmail = await resend.emails.send({
        from: getFromAddress('admin'),
        to: process.env.CONTACT_EMAIL || 'info@addvalueagent.com',
        subject: `【お問い合わせ】${subjectName}様より`,
        html: adminEmailHtml,
        replyTo: email
      })

      console.log('Admin notification sent:', adminEmail.data?.id)

      // 顧客への自動返信メール送信
      const customerEmail = await resend.emails.send({
        from: getFromAddress('customer'),
        to: email,
        subject: '【株式会社アドバリューエージェント】お問い合わせありがとうございます',
        html: customerEmailHtml
      })

      console.log('Customer auto-reply sent:', customerEmail.data?.id)

      console.log('Contact inquiry processed:', {
        name,
        email,
        company,
        timestamp: new Date().toISOString()
      })

      return res.status(200).json({
        success: true,
        message: ACCEPTED_MESSAGE
      })
    } catch (mailError: any) {
      console.error('Resend error:', {
        message: mailError.message,
        name: mailError.name
      })
      
      return res.status(500).json({
        error: 'メール送信エラー: ' + (mailError.message || 'メールの送信に失敗しました。')
      })
    }

  } catch (error: any) {
    console.error('Error processing contact inquiry:', {
      message: error.message,
      stack: error.stack
    })
    
    return res.status(500).json({
      error: error.message || 'お問い合わせの送信に失敗しました。しばらく時間をおいて再度お試しください。'
    })
  }
}
