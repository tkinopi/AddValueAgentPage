import { ContactInquiry } from '../entities/ContactInquiry';

export interface IContactRepository {
  save(inquiry: ContactInquiry): Promise<ContactInquiry>;
  findById(id: string): Promise<ContactInquiry | null>;
  findAll(): Promise<ContactInquiry[]>;
}