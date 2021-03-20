import mongoose from 'mongoose';
import { MONGO_CONNECTION_STRING } from '../config';
import logger from '../logging/logger';

const connectToDB = (): void => {
  mongoose
    .connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .catch((err) => logger.error(err.message));

  const db = mongoose.connection;
  db.once('open', () => {
    logger.info('Mongo connection successfully!');
  });
};

export { connectToDB };
