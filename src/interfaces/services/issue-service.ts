interface IIssueService {
  createIssue(data: {
    id: string;
    title: string;
    description: string;
  }): Promise<{
    issue: {
      id: string;
      title: string;
      description: string;
    };
  }>;

  getIssueById(data: { id: string }): Promise<{
    issue: {
      id: string;
      title: string;
      description: string;
    };
  }>;

  updateIssue(data: {
    id: string;
    title: string;
    description: string;
  }): Promise<{
    issue: {
      id: string;
      title: string;
      description: string;
    };
  }>;

  deleteIssue(data: { id: string }): Promise<{
    status: 'success' | 'fail';
  }>;
}

export default IIssueService;
