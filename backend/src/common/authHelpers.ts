import bcrypt from 'bcrypt';
import jsonWebToken from 'jsonwebtoken';

const rounds = 10;

const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, rounds);
};

const checkHashedPassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

const generateToken = async (login: string): Promise<string> => {
  const token = jsonWebToken.sign(
    {login},
    process.env.TOKEN_SECRET_KEY,
    { expiresIn: process.env.REFRESH_TOKEN_TIME_MS }
  );
  return token;
};

export { hashPassword, checkHashedPassword, generateToken };
