import { HttpStatusCode } from 'axios';
import { ServerError } from './error';

export class InternalServerError extends ServerError {
  constructor() {
    super(HttpStatusCode.InternalServerError);
    this.message = 'Internal Server Error';
    this.code = 'INTERNAL_SERVER_ERROR';
  }
}
