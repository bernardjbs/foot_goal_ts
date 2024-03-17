import { Sequelize } from '@sequelize/core';
import { processEnv } from '../utils/processEnv.js';
import { User, FootMatch, Competition, Stats, UserMatch } from './models/index.js';

const DB_DATABASE = processEnv().DB_DATABASE as string;
const DB_USERNAME = processEnv().DB_USERNAME as string;
const DB_PASSWORD = processEnv().DB_PASSWORD as string;
const DB_DIALECT = processEnv().DB_DIALECT as 'mysql';
const DB_HOST = processEnv().DB_HOST as string;

let sequelizeConnection: Sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: 3306,
  schema: DB_DATABASE,
  models: [User, FootMatch, Competition, Stats, UserMatch],
  // logging: (...msg) => console.log(msg)
});

try {
  await sequelizeConnection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
export default sequelizeConnection;
