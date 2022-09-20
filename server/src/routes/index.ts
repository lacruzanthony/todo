import express, { Request, Response } from 'express'
import { cacheWrapper } from '../cache-wrapper';

const router = express.Router();

router.get('/api/todos', async (_req: Request, res: Response) => {
  const cache = cacheWrapper.client;
  cache.set("todos", [
    {
      "name": "My first task",
      "isComplete": true,
      "id": 16
    }]
  );
  res.send(cache.get("todos"))
});

export { router as indexTodo }
