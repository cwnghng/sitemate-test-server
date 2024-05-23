import { Response } from 'express';
import Logger from '../utils/winstonLogger';
import { ServerError } from '../errors/error';

const handleRequestError = (res: Response, err: any): void => {
  Logger.error(err);

  if (err instanceof ServerError) {
    res.status(err.status).json({
      message: err.message,
      code: err.code,
    });
    return;
  }

  res.status(500).json({
    message: 'Internal Server Error',
    code: 'INTERNAL_SERVER_ERROR',
  });
};

export default handleRequestError;
