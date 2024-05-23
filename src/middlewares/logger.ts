import { NextFunction, Request, Response } from 'express';
import Logger from '../utils/winstonLogger';

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const message = `${req.method} ${req.url} called from ${req.ip}`;

  Logger.debug(message);
  next();
}
