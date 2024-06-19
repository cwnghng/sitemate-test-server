import { DeleteResult } from 'mongodb';
import { Issue, IssueDocument } from '../../models/issue-model';

interface IIssueRepository {
  createIssue(data: {
    id: string;
    title: string;
    description: string;
  }): Promise<IssueDocument>;

  getIssueById(data: { id: string }): Promise<IssueDocument | null>;

  getIssueList(): Promise<IssueDocument[]>;

  updateIssueById(
    data: {
      id: string;
    },
    update: {
      title?: string;
      description?: string;
    },
  ): Promise<IssueDocument | null>;

  deleteIssueById(data: { id: string }): Promise<DeleteResult>;
}

export default IIssueRepository;
