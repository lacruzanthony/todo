import express, { Request, Response } from 'express'
import { cacheWrapper } from '../cache-wrapper';
import { Todo } from './types/Todo';

const router = express.Router();

router.get('/api/todos/random', async (_req: Request, res: Response) => {
  const cache = cacheWrapper.client;
  const todos = cache.get("todos") as Todo[];
  const randomTodo = todos[Math.floor(Math.random() * todos.length)]
  res.send(randomTodo)
});

export { router as randomTodo }
