import express, { Request, Response } from 'express'
import { cacheWrapper } from '../cache-wrapper';

const router = express.Router();

router.delete('/api/todos', async (_req: Request, res: Response) => {
  const cache = cacheWrapper.client;

  cache.flushAll();

  res.send(cache.keys())
});

export { router as deleteTodo }
