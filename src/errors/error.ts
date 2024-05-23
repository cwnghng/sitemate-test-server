import { HttpStatusCode } from 'axios';

export class ServerError extends Error {
  status: number;

  message: string;

  code: string;

  constructor(status: HttpStatusCode) {
    super();
    this.status = status;
    this.message = 'Server error';
    this.code = 'SERVER_ERROR';
  }
}
