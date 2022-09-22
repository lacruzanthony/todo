import express, { Request, Response } from 'express'
import { cacheWrapper } from '../cache-wrapper';
import { Todo } from './types/Todo';

const router = express.Router();

router.delete('/api/todos/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const cache = cacheWrapper.client;

  const todos = cache.get("todos") as Todo[]

  const filteredTodos = todos.filter(todo => todo.id !== Number(id))

  res.send(...filteredTodos)
});

export { router as deleteTodo }
