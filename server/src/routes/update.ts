import express, { Request, Response } from 'express'
import { cacheWrapper } from '../cache-wrapper';
import { Todo } from './types/Todo';

const router = express.Router();

router.put('/api/todos/:id', async (req: Request, res: Response) => {
  const cache = cacheWrapper.client;
  const { id, name, isComplete } = req.body
  const todos = cache.get("todos") as Todo[]

  const filteredTodos = todos.filter(todo => todo.id !== id)
  filteredTodos.push({
    id: id,
    name: name,
    isComplete: !isComplete
  })
  res.status(200).send({ todos: filteredTodos })
});

export { router as updateTodo }
