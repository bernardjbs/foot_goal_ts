import jwt from 'jsonwebtoken';
import { processEnv } from './processEnv.js';

const secret = processEnv().JWT_SECRET as string;

const expiration = '900s'; //15 minutes;

export const authMiddleware = (req: any, res: any, next: any) => {
  let token = req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return res.status(400).json({ message: 'You have no token!' });
  }

  try {
    const { data }: any = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
    next();
  } catch (error) {
    console.log('Invalid token');
    return res.status(400).json({ message: 'Invalid token!' });
  }
};

export const signToken = ({ email, firstName, lastName, userType, _id }: any) => {
  const payload = { email, firstName, lastName, userType, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};
