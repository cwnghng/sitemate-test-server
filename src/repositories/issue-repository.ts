import { ObjectId } from 'mongoose';
import IssueModel, { Issue, IssueDocument } from '../models/issue-model';
import IIssueRepository from '../interfaces/repositories/issue-repository';
import { DeleteResult } from 'mongodb';

class IssueRepository implements IIssueRepository {
  async createIssue(data: {
    id: string;
    title: string;
    description: string;
  }): Promise<IssueDocument> {
    const result = await IssueModel.create(data);

    return result;
  }

  async getIssueById(filter: { id: string }): Promise<IssueDocument | null> {
    const result = await IssueModel.findOne(filter);

    return result;
  }

  async updateIssueById(
    filter: {
      id: string;
    },
    update: {
      title?: string;
      description?: string;
    },
  ): Promise<IssueDocument | null> {
    const result = await IssueModel.findOneAndUpdate(
      { id: filter.id },
      update,
      {
        new: true,
      },
    );

    return result;
  }

  async deleteIssueById(filter: { id: string }): Promise<DeleteResult> {
    const result = await IssueModel.deleteOne(filter, { new: true });

    return result;
  }
}

export default IssueRepository;
