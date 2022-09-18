import createError from 'http-errors'
import express from 'express'
import cookieSession from 'cookie-session';
import logger from 'morgan'
import { json } from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import { indexTodo } from './routes/index';


const app = express();

app.use(json());
app.use(logger('dev'));
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
);

// TODO: add the new routes
app.use(indexTodo);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (_req: Request, _res: Response, next: NextFunction) {
  next(createError(404));
});

export { app };
