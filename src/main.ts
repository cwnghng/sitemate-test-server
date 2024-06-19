import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import HealthController from './controllers/health-controller';
import { loggerMiddleware } from './middlewares/logger';
import Logger from './utils/winstonLogger';
import connectToMongoDb from './providers/mongo-provider';
import IssueController from './controllers/issue-controller';
import IssueRepository from './repositories/issue-repository';
import IssueService from './services/issue-service';

const SERVER_PORT = 8080;

dotenv.config();

(async () => {
  // Connect to Providers
  await connectToMongoDb();

  // Initialise Repositories
  const issueRepository = new IssueRepository();

  // Initialise Services
  const issueService = new IssueService(issueRepository);

  const server = express();
  server.use(cookieParser());
  server.use(loggerMiddleware);

  server.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );

  const apiRouter = express();
  apiRouter.use(express.json());
  server.use('/api', apiRouter);
  apiRouter.use('/health', HealthController());
  apiRouter.use('/issue', IssueController(issueService));

  server.listen(SERVER_PORT, '0.0.0.0', () =>
    Logger.debug(`Server running on port ${SERVER_PORT}`),
  );
})();
