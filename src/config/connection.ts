import { Sequelize } from 'sequelize';
import { processEnv } from '@utils/processEnv.js';
let sequelize: any;
const DB_NAME = processEnv().DB_NAME;
const DB_USER = processEnv().DB_USER;
const DB_PASSWORD = processEnv().DB_PASSWORD;

if (!DB_NAME || !DB_USER || !DB_PASSWORD) {
  console.error('Environment variables are not defined.');
  process.exit(1); // Exit the process with an error code
}

sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

export default sequelize;
