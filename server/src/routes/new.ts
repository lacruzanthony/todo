import express, { Request, Response } from 'express'
import { cacheWrapper } from "../cache-wrapper";

const router = express.Router();

router.post('/api/todos', async (req: Request, res: Response) => {
  const { todoName } = req.body
  const cache = cacheWrapper.client;

  const todos = cache.get("todos");

  if (!cache.get("todos")) {
    cache.set("todos", [{ name: todoName }]);
  } else {
    // @ts-ignore
    todos.push({ name: todoName })
    cache.set("todos", todos);
  }

  res.send(cache.get("todos"))
});

export { router as createTodo }
