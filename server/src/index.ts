import { app } from './app'
import { cacheWrapper } from "./cache-wrapper";

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }
  try {
    cacheWrapper.connect();
  } catch (error) {
    console.log(error)
  }
  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();