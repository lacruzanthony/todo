import express, { Request, Response } from 'express'
import { cacheWrapper } from "../cache-wrapper";

const router = express.Router();

router.post('/api/todos', async (req: Request, res: Response) => {
  const { name, isComplete } = req.body
  const cache = cacheWrapper.client;
  const id = Date.now();

  const todos = cache.get("todos");

  if (!cache.get("todos")) {
    cache.set("todos", [{ name, isComplete }]);
  } else {
    // @ts-ignore
    todos.push({ id: id, name, isComplete })
    cache.set("todos", todos);
  }

  res.send({ name, isComplete, id })
});

export { router as createTodo }
