import ENV from './configs.js'

export default {
  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_DATABASE,
  host: ENV.DB_HOST,
  dialect: 'mysql',
  port: ENV.DB_PORT
};