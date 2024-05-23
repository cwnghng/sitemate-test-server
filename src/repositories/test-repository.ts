import { ObjectId } from 'mongoose';
import TestModel, { Test, TestDocument } from '../models/test-model';

class TestRepository {
  async createTest(data: {
    name: string;
    age: number;
    details: {
      [key: string]: any;
    };
    admin_details: {
      [key: string]: any;
    };
  }): Promise<TestDocument> {
    const result = await TestModel.create(data);

    return result;
  }

  async getTestById(filter: { _id: ObjectId }): Promise<TestDocument | null> {
    const result = await TestModel.findOne(filter);

    return result;
  }

  async updateTestById(
    filter: {
      _id: ObjectId;
    },
    update: {
      name?: string;
      age?: number;
    },
  ): Promise<TestDocument | null> {
    const result = await TestModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    return result;
  }

  async deleteTestById(filter: {
    _id: ObjectId;
  }): Promise<TestDocument | null> {
    const result = await TestModel.findOneAndDelete(filter);

    return result;
  }
}

export default TestRepository;
