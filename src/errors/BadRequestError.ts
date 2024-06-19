import { HttpStatusCode } from 'axios';
import { ServerError } from './error';

export class BadRequestError extends ServerError {
  constructor() {
    super(HttpStatusCode.BadRequest);
    this.message = 'Bad Request';
    this.code = 'BAD_REQUEST';
  }
}
