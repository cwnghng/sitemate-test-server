import { HttpStatusCode } from 'axios';
import { ServerError } from './error';

export class IssueNotFoundError extends ServerError {
  constructor() {
    super(HttpStatusCode.InternalServerError);
    this.message = 'Issue not found';
    this.code = 'ISSUE_NOT_FOUND';
  }
}
