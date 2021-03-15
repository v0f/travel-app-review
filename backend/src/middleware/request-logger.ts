import morgan from 'morgan';
import logger from '../common/logging/logger';

const format = process.env.NODE_ENV === 'production' ? 'short' : 'dev';
const options = {
  stream: {
    write: (message: string) => logger.info(message.trim()),
  },
};

export default morgan(format, options);
