import { users, type User, type InsertUser, type Inquiry, type InsertInquiry } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createInquiry(inquiry: InsertInquiry & { dateSubmitted: string }): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  getInquiry(id: number): Promise<Inquiry | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiries: Map<number, Inquiry>;
  private userCurrentId: number;
  private inquiryCurrentId: number;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.userCurrentId = 1;
    this.inquiryCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createInquiry(inquiry: InsertInquiry & { dateSubmitted: string }): Promise<Inquiry> {
    const id = this.inquiryCurrentId++;
    // Create a new inquiry object with the correct type
    const newInquiry: Inquiry = {
      id,
      name: inquiry.name,
      email: inquiry.email,
      company: inquiry.company ?? null,
      service: inquiry.service,
      message: inquiry.message,
      dateSubmitted: inquiry.dateSubmitted
    };
    this.inquiries.set(id, newInquiry);
    return newInquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }

  async getInquiry(id: number): Promise<Inquiry | undefined> {
    return this.inquiries.get(id);
  }
}

export const storage = new MemStorage();
