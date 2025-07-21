import { ContactInquiry } from '../../domain/entities/ContactInquiry.js';
import { IContactRepository } from '../../domain/repositories/IContactRepository.js';
import { nanoid } from 'nanoid';

export class InMemoryContactRepository implements IContactRepository {
  private inquiries: Map<string, ContactInquiry> = new Map();

  async save(inquiry: ContactInquiry): Promise<ContactInquiry> {
    const id = inquiry.id || nanoid();
    const savedInquiry: ContactInquiry = {
      ...inquiry,
      id,
      createdAt: inquiry.createdAt || new Date()
    };
    
    this.inquiries.set(id, savedInquiry);
    return savedInquiry;
  }

  async findById(id: string): Promise<ContactInquiry | null> {
    return this.inquiries.get(id) || null;
  }

  async findAll(): Promise<ContactInquiry[]> {
    return Array.from(this.inquiries.values());
  }
}