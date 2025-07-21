import { InquiryType } from '../../domain/entities/ContactInquiry';

export interface ContactRequestDto {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  inquiry_type: string;
  message: string;
}

export interface ContactResponseDto {
  success: boolean;
  message: string;
  inquiryId?: string;
}

export class ContactRequestDtoMapper {
  static toDomain(dto: ContactRequestDto): {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    inquiryType: InquiryType;
    message: string;
  } {
    return {
      name: dto.name,
      email: dto.email,
      company: dto.company,
      phone: dto.phone,
      inquiryType: this.mapInquiryType(dto.inquiry_type),
      message: dto.message,
    };
  }

  private static mapInquiryType(type: string): InquiryType {
    const typeMap: Record<string, InquiryType> = {
      'recruitment': InquiryType.RECRUITMENT,
      'consulting': InquiryType.CONSULTING,
      'ses': InquiryType.SES,
      'web': InquiryType.WEB,
      'education': InquiryType.EDUCATION,
      'other': InquiryType.OTHER,
    };
    
    return typeMap[type] || InquiryType.OTHER;
  }
}