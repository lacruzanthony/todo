import { app } from './app'
import { cacheWrapper } from "./cache-wrapper";

const start = async () => {
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