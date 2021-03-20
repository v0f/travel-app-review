import { InternalServerError, MongoDuplicateError } from './errors-list';
import logger from '../logging/logger';

export default (err, path) => {
  // Handle mongoose duplicate errors
  if (err.code === 11000) {
    err = new MongoDuplicateError(
      `'${Object.keys(err.keyValue)}' already used`
    );
  }

  if (!err.reason) {
    logger.error(err.message, err.stack);
    if (err.name === 'SyntaxError') {
      err = new InternalServerError('syntax error');
    } else err = new InternalServerError();
  }

  // const response = {};
  const { reason, statusText, status } = err;

  // response.status = status;
  // response.data = {
  //   status,
  //   error: statusText,
  //   detail: reason,
  //   path,
  // };

  // return response;
  return {
    status: status,
    data: {
      status,
      error: statusText,
      detail: reason,
      path,
    }
  }
};
