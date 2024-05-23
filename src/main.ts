import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import HealthController from './controllers/health-controller';
import { loggerMiddleware } from './middlewares/logger';
import Logger from './utils/winstonLogger';
import connectToMongoDb from './providers/mongo-provider';
import TestController from './controllers/test-controller';
import TestRepository from './repositories/test-repository';
import TestService from './services/test-service';

const SERVER_PORT = 8080;

dotenv.config();

(async () => {
  // Connect to Providers
  await connectToMongoDb();

  // Initialise Repositories
  const testRepository = new TestRepository();

  // Initialise Services
  const testService = new TestService(testRepository);

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
  apiRouter.use('/test', TestController(testService));

  server.listen(SERVER_PORT, '0.0.0.0', () =>
    Logger.debug(`Server running on port ${SERVER_PORT}`),
  );
})();
