import { SubmitContactInquiryUseCase } from '../../application/usecases/SubmitContactInquiryUseCase';
import { ContactRequestDto } from '../../application/dto/ContactRequestDto';

interface RequestLike {
  method?: string;
  body: any;
}

interface ResponseLike {
  status: (code: number) => {
    json: (data: any) => void;
  };
}

export class ContactController {
  constructor(private readonly submitContactInquiryUseCase: SubmitContactInquiryUseCase) {}

  async handleContactSubmission(req: RequestLike, res: ResponseLike): Promise<void> {
    if (req.method !== 'POST') {
      res.status(405).json({ message: 'Method not allowed' });
      return;
    }

    try {
      const requestDto: ContactRequestDto = req.body;

      // 基本的なリクエストバリデーション
      if (!this.validateRequest(requestDto)) {
        res.status(400).json({
          success: false,
          message: '必須項目を入力してください。'
        });
        return;
      }

      // ユースケースを実行
      const result = await this.submitContactInquiryUseCase.execute(requestDto);

      if (result.success) {
        res.status(200).json(result);
      } else {
        res.status(400).json(result);
      }

    } catch (error) {
      console.error('Contact controller error:', error);
      res.status(500).json({
        success: false,
        message: '内部サーバーエラーが発生しました。'
      });
    }
  }

  private validateRequest(request: ContactRequestDto): boolean {
    return !!(
      request.name &&
      request.email &&
      request.inquiry_type &&
      request.message &&
      request.name.trim().length > 0 &&
      request.email.trim().length > 0 &&
      request.message.trim().length > 0
    );
  }
}