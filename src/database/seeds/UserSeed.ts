import User from '@database/models/User.js';
import { UserInterface } from '@ts/interfaces.js';
import bcrypt from 'bcrypt';
const userData: UserInterface[] = [
  {
    firstName: 'Admin',
    lastName: 'Foot',
    username: 'admin',
    password: await bcrypt.hash('secret', 10),
    email: 'admin@footgoal.com',
    phone: '038974867'
  },
  {
    firstName: 'Jean',
    lastName: 'Sin',
    username: 'jeansin',
    password: await bcrypt.hash('secret', 10),
    email: 'jean@footgoal.com',
    phone: '049238492'
  },
  {
    firstName: 'User',
    lastName: 'Foot',
    username: 'user',
    password: await bcrypt.hash('secret', 10),
    email: 'user@footgoal.com',
    phone: '099384742'
  }
];

export const seedUsers = () => User.bulkCreate(userData);
