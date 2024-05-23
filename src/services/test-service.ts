import { ObjectId } from 'mongoose';
import TestRepository from '../repositories/test-repository';

class TestService {
  testRepository: TestRepository;

  constructor(testRepository: TestRepository) {
    this.testRepository = testRepository;
  }

  async createTest(data: {
    name: string;
    age: number;
    details: {
      [key: string]: any;
    };
    admin_details: {
      [key: string]: any;
    };
  }) {
    const testDocument = await this.testRepository.createTest(data);

    return { test: testDocument.toAdminObject() };
  }

  async getTestById(data: { _id: ObjectId }) {
    const testDocument = await this.testRepository.getTestById(data);
    if (!testDocument) throw new Error('Test not found');

    return { test: testDocument.toPublicObject() };
  }
}

export default TestService;
