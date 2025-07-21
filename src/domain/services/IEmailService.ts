import { ContactInquiry } from '../entities/ContactInquiry.js';

export interface EmailNotificationData {
  to: string;
  subject: string;
  htmlContent: string;
  replyTo?: string;
}

export interface IEmailService {
  sendContactNotification(inquiry: ContactInquiry): Promise<void>;
  sendAutoReply(inquiry: ContactInquiry): Promise<void>;
}