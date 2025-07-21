export interface ContactInquiry {
  readonly id?: string;
  readonly name: string;
  readonly email: string;
  readonly company?: string;
  readonly phone?: string;
  readonly inquiryType: InquiryType;
  readonly message: string;
  readonly createdAt?: Date;
}

export enum InquiryType {
  RECRUITMENT = 'recruitment',
  CONSULTING = 'consulting',
  SES = 'ses',
  WEB = 'web',
  EDUCATION = 'education',
  OTHER = 'other'
}

export class ContactInquiryEntity {
  constructor(
    public readonly id: string | undefined,
    public readonly name: string,
    public readonly email: string,
    public readonly company: string | undefined,
    public readonly phone: string | undefined,
    public readonly inquiryType: InquiryType,
    public readonly message: string,
    public readonly createdAt: Date = new Date()
  ) {
    this.validateEmail(email);
    this.validateRequired(name, 'Name');
    this.validateRequired(message, 'Message');
  }

  private validateEmail(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
  }

  private validateRequired(value: string, fieldName: string): void {
    if (!value || value.trim().length === 0) {
      throw new Error(`${fieldName} is required`);
    }
  }

  static fromData(data: ContactInquiry): ContactInquiryEntity {
    return new ContactInquiryEntity(
      data.id,
      data.name,
      data.email,
      data.company,
      data.phone,
      data.inquiryType,
      data.message,
      data.createdAt
    );
  }

  toData(): ContactInquiry {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      company: this.company,
      phone: this.phone,
      inquiryType: this.inquiryType,
      message: this.message,
      createdAt: this.createdAt
    };
  }
}