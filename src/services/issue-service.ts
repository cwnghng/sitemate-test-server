import { IssueNotFoundError } from '../errors/IssueNotFoundError';
import IIssueService from '../interfaces/services/issue-service';
import IssueRepository from '../repositories/issue-repository';
import Logger from '../utils/winstonLogger';

class IssueService implements IIssueService {
  issueRepository: IssueRepository;

  constructor(issueRepository: IssueRepository) {
    this.issueRepository = issueRepository;
  }

  async createIssue(data: { id: string; title: string; description: string }) {
    Logger.info(`Creating issue ${JSON.stringify(data)}`);
    const issueDocument = await this.issueRepository.createIssue(data);

    return { issue: issueDocument.toObject() };
  }

  async getIssueById(data: { id: string }) {
    Logger.info(`Getting issue by id ${JSON.stringify(data)}`);
    const issueDocument = await this.issueRepository.getIssueById(data);
    if (!issueDocument) throw new IssueNotFoundError();

    return {
      issue: issueDocument.toObject(),
    };
  }

  async updateIssue(data: { id: string; title: string; description: string }) {
    Logger.info(`Updating issue: ${JSON.stringify(data)}`);
    const issueDocument = await this.issueRepository.updateIssueById(
      { id: data.id },
      { title: data.title, description: data.description },
    );
    if (!issueDocument) throw new IssueNotFoundError();

    return { issue: issueDocument.toObject() };
  }

  async deleteIssue(data: {
    id: string;
  }): Promise<{ status: 'success' | 'fail' }> {
    Logger.info(`Deleting issue ${JSON.stringify(data)}`);
    const deleted = await this.issueRepository.deleteIssueById(data);

    return {
      status: deleted.deletedCount === 1 ? 'success' : 'fail',
    };
  }
}

export default IssueService;
