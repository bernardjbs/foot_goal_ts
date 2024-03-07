import { Sequelize } from 'sequelize';
import { processEnv } from '@utils/processEnv.js';

const DB_DATABASE = processEnv().DB_DATABASE as string;
const DB_USERNAME = processEnv().DB_USERNAME as string;
const DB_PASSWORD = processEnv().DB_PASSWORD as string;

let sequelizeConnection: Sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: processEnv().DB_HOST,
  dialect: 'mysql',
  port: 3306, 
});

try {
  await sequelizeConnection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
export default sequelizeConnection;