import errorHandler from '../common/errors/error-handler';

export default (err, req, res, next) => {
  const path = req.originalUrl;

  const { status, data } = errorHandler(err, path);

  res.status(status);
  res.json({ errors: data });
};
