import { IContactRepository } from '../../domain/repositories/IContactRepository';
import { IEmailService } from '../../domain/services/IEmailService';
import { SubmitContactInquiryUseCase } from '../../application/usecases/SubmitContactInquiryUseCase';
import { ContactController } from '../../presentation/controllers/ContactController';
import { InMemoryContactRepository } from '../persistence/InMemoryContactRepository';
import { GmailEmailService } from '../email/GmailEmailService';

export class DIContainer {
  private static instance: DIContainer;
  private contactRepository: IContactRepository;
  private emailService: IEmailService;
  private submitContactInquiryUseCase: SubmitContactInquiryUseCase;
  private contactController: ContactController;

  private constructor() {
    // Infrastructure Layer
    this.contactRepository = new InMemoryContactRepository();
    this.emailService = new GmailEmailService();

    // Application Layer
    this.submitContactInquiryUseCase = new SubmitContactInquiryUseCase(
      this.contactRepository,
      this.emailService
    );

    // Presentation Layer
    this.contactController = new ContactController(this.submitContactInquiryUseCase);
  }

  public static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }

  public getContactController(): ContactController {
    return this.contactController;
  }

  public getContactRepository(): IContactRepository {
    return this.contactRepository;
  }

  public getEmailService(): IEmailService {
    return this.emailService;
  }

  public getSubmitContactInquiryUseCase(): SubmitContactInquiryUseCase {
    return this.submitContactInquiryUseCase;
  }
}