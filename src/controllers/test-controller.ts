import express from 'express';

import TestService from '../services/test-service';
import handleRequestError from './error-handler';

export default function TestController(testService: TestService) {
  const router = express.Router();

  router.post('/create-test', async (req, res) => {
    try {
      const data = await testService.createTest(req.body);
      res.status(201).json(data);
    } catch (err) {
      handleRequestError(res, err);
    }
  });

  return router;
}
