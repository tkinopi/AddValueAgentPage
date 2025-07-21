import { ContactInquiryEntity } from '../../domain/entities/ContactInquiry.js';
import { IContactRepository } from '../../domain/repositories/IContactRepository.js';
import { IEmailService } from '../../domain/services/IEmailService.js';
import { ContactRequestDto, ContactResponseDto, ContactRequestDtoMapper } from '../dto/ContactRequestDto.js';

export class SubmitContactInquiryUseCase {
  constructor(
    private readonly contactRepository: IContactRepository,
    private readonly emailService: IEmailService
  ) {}

  async execute(request: ContactRequestDto): Promise<ContactResponseDto> {
    try {
      // DTOをドメインオブジェクトに変換
      const domainData = ContactRequestDtoMapper.toDomain(request);
      
      // ドメインエンティティを作成（バリデーション含む）
      const inquiryEntity = new ContactInquiryEntity(
        undefined,
        domainData.name,
        domainData.email,
        domainData.company,
        domainData.phone,
        domainData.inquiryType,
        domainData.message
      );

      // リポジトリに保存
      const savedInquiry = await this.contactRepository.save(inquiryEntity.toData());

      // メール送信（並行処理）
      await Promise.all([
        this.emailService.sendContactNotification(savedInquiry),
        this.emailService.sendAutoReply(savedInquiry)
      ]);

      return {
        success: true,
        message: "お問い合わせありがとうございます。担当者よりご連絡いたします。",
        inquiryId: savedInquiry.id
      };

    } catch (error) {
      console.error('Contact inquiry submission failed:', error);
      
      if (error instanceof Error) {
        // ドメインバリデーションエラーの場合
        if (error.message.includes('Invalid email') || error.message.includes('required')) {
          return {
            success: false,
            message: "入力内容に不備があります。必須項目を確認してください。"
          };
        }
      }

      return {
        success: false,
        message: "送信中にエラーが発生しました。もう一度お試しください。"
      };
    }
  }
}