import User from '@database/models/User.js';
import bcrypt from 'bcrypt';
const userData = [
  {
    firstName: 'Admin',
    lastName: 'Foot',
    username: 'admin',
    password: await bcrypt.hash('secret', 10),
    email: 'admin@footgoal.com',
    phone: '038974867',
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    firstName: 'Jean',
    lastName: 'Sin',
    username: 'bernardjbs',
    password: await bcrypt.hash('secret', 10),
    email: 'jean@footgoal.com',
    phone: '049238492',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'User',
    lastName: 'Foot',
    username: 'user',
    password: await bcrypt.hash('secret', 10),
    email: 'user@footgoal.com',
    phone: '099384742',
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

export const seedUsers = () => User.bulkCreate(userData);
