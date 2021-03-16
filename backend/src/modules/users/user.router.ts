import Router from 'express';
import wrap from '../../common/errors/async-error-wrapper';
import { User } from './user.schema';
import { hashPassword, checkHashedPassword, generateToken } from '../../common/authHelpers';
import checkAuth from '../../middleware/checkAuth';

const router = Router();

router.post('/login', wrap(async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ login }).exec();
  if (!user) {
    res.status(403).json({ message: 'invalid login-password' });
    return;
  }
  const passwordOk = await checkHashedPassword(password, user.password);
  if (!passwordOk) {
    res.status(403).json({ message: 'invalid login-password' });
    return;
  }
  const token = await generateToken(login);
  user.token = token;
  user.tokenExpire = Date.now() + Number(process.env.REFRESH_TOKEN_TIME_MS);
  user.save();
  res.status(200).json({user});
}));

router.post('/', wrap(async (req, res) => {
  const { login, password, name, avatarUrl } = req.body;
  const user = await User.findOne({ login });
  if (user) {
    res.status(403).json({ message: 'login taken' });
    return;
  }
  const token = await generateToken(login);
  const tokenExpire = Date.now() + Number(process.env.REFRESH_TOKEN_TIME_MS);
  const newUser = await User.create({
    login,
    password: await hashPassword(password),
    name,
    avatarUrl,
    token,
    tokenExpire,
  });
  res.status(201).json({newUser});

}));

router.get('/current', checkAuth, wrap(async (req, res) => {
  const user = await User.find({login: res.locals.userLogin}).exec();
  res.json(user);
}));

export default router;
