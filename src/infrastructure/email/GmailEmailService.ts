import nodemailer from 'nodemailer';
import { ContactInquiry, InquiryType } from '../../domain/entities/ContactInquiry.js';
import { IEmailService } from '../../domain/services/IEmailService.js';

export class GmailEmailService implements IEmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }

  async sendContactNotification(inquiry: ContactInquiry): Promise<void> {
    const inquiryTypeLabel = this.getInquiryTypeLabel(inquiry.inquiryType);
    const htmlContent = this.generateNotificationHtml(inquiry, inquiryTypeLabel);

    await this.transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      subject: `【お問い合わせ】${inquiryTypeLabel} - ${inquiry.name}様より`,
      html: htmlContent,
      replyTo: inquiry.email,
    });
  }

  async sendAutoReply(inquiry: ContactInquiry): Promise<void> {
    const inquiryTypeLabel = this.getInquiryTypeLabel(inquiry.inquiryType);
    const htmlContent = this.generateAutoReplyHtml(inquiry, inquiryTypeLabel);

    await this.transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: inquiry.email,
      subject: 'お問い合わせありがとうございます - 株式会社アドバリューエージェント',
      html: htmlContent,
    });
  }

  private getInquiryTypeLabel(type: InquiryType): string {
    const typeMap: Record<InquiryType, string> = {
      [InquiryType.RECRUITMENT]: '人材紹介について',
      [InquiryType.CONSULTING]: '採用コンサルティングについて',
      [InquiryType.SES]: 'SES事業について',
      [InquiryType.WEB]: 'webコンサルティングについて',
      [InquiryType.EDUCATION]: '教育支援について',
      [InquiryType.OTHER]: 'その他'
    };
    return typeMap[type] || type;
  }

  private generateNotificationHtml(inquiry: ContactInquiry, inquiryTypeLabel: string): string {
    return `
      <h2>お問い合わせフォームからの新着メッセージ</h2>
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-bottom: 15px;">お客様情報</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">お名前</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${inquiry.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #ddd; font-weight: bold;">メールアドレス</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${inquiry.email}</td>
          </tr>
          ${inquiry.company ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #ddd; font-weight: bold;">会社名</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${inquiry.company}</td>
          </tr>
          ` : ''}
          ${inquiry.phone ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #ddd; font-weight: bold;">電話番号</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${inquiry.phone}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #ddd; font-weight: bold;">お問い合わせ種別</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${inquiryTypeLabel}</td>
          </tr>
        </table>
        
        <h3 style="color: #333; margin: 20px 0 10px 0;">お問い合わせ内容</h3>
        <div style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${inquiry.message}</div>
      </div>
      
      <p style="color: #666; font-size: 14px; margin-top: 30px;">
        このメールは Add Value Agent のお問い合わせフォームから送信されました。<br>
        送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
      </p>
    `;
  }

  private generateAutoReplyHtml(inquiry: ContactInquiry, inquiryTypeLabel: string): string {
    return `
      <h2>お問い合わせありがとうございます</h2>
      <p>${inquiry.name} 様</p>
      
      <p>この度は、株式会社アドバリューエージェントにお問い合わせいただき、誠にありがとうございます。</p>
      
      <p>以下の内容でお問い合わせを承りました。</p>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-bottom: 15px;">お問い合わせ内容</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">お問い合わせ種別</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${inquiryTypeLabel}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">お問い合わせ内容</td>
            <td style="padding: 8px 0; white-space: pre-wrap;">${inquiry.message}</td>
          </tr>
        </table>
      </div>
      
      <p>担当者が内容を確認の上、2営業日以内にご連絡させていただきます。</p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
      
      <div style="color: #666; font-size: 14px;">
        <strong>株式会社アドバリューエージェント</strong><br>
        〒651-2112<br>
        兵庫県神戸市西区大津和2丁目8番2号<br>
        Email: info@addvalue-agent.co.jp<br>
        営業時間: 平日 9:00〜18:00
      </div>
    `;
  }
}