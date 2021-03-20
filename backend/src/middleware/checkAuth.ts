import jsonWebToken from 'jsonwebtoken';

const checkAuth = (req, res, next) => {
  const tokenString = req.headers.authorization;
  if (!tokenString) {
    return res.status(401).json({ message: 'INVALIDTOKEN' });
  }
  const [type, token] = tokenString.split(' ');
  if (type !== 'Bearer') {
    return res.status(401).json({ message: 'INVALIDTOKEN' });
  }
  try {
    const { login } = jsonWebToken.verify(token, process.env.TOKEN_SECRET_KEY) as {login: string};
    res.locals.userLogin = login;
  } catch (error) {
    return res.status(401).json({ message: 'INVALIDTOKEN' });
  }
  return next();
};

export default checkAuth;
