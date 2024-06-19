import express from 'express';

import IssueService from '../services/issue-service';
import handleRequestError from './error-handler';
import { BadRequestError } from '../errors/BadRequestError';

export default function IssueController(issueService: IssueService) {
  const router = express.Router();

  router.post('/create-issue', async (req, res) => {
    try {
      const data = await issueService.createIssue(req.body);
      res.status(201).json(data);
    } catch (err) {
      handleRequestError(res, err);
    }
  });

  router.get('/get-issue', async (req, res) => {
    try {
      const { id } = req.query;
      if (typeof id !== 'string') throw new BadRequestError();

      const data = await issueService.getIssueById({ id });
      res.status(200).json(data);
    } catch (err) {
      handleRequestError(res, err);
    }
  });

  router.get('/get-issue-list', async (req, res) => {
    try {
      const data = await issueService.getIssueList();
      res.status(200).json(data);
    } catch (err) {
      handleRequestError(res, err);
    }
  });

  router.put('/update-issue', async (req, res) => {
    try {
      const data = await issueService.updateIssue(req.body);
      res.status(201).json(data);
    } catch (err) {
      handleRequestError(res, err);
    }
  });

  router.delete('/delete-issue', async (req, res) => {
    try {
      const data = await issueService.deleteIssue(req.body);
      res.status(201).json(data);
    } catch (err) {
      handleRequestError(res, err);
    }
  });

  return router;
}
