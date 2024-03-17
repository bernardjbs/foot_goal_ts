import dotenv from 'dotenv';
import path from 'path';

const filePath = new URL(import.meta.url).pathname;
const directoryPath = path.dirname(filePath.startsWith('/') ? filePath.slice(1) : filePath);

dotenv.config({ path: path.resolve(directoryPath, '../../.env') });

const ENV = {
  PORT: process.env.PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_HOST: process.env.DB_HOST,
  DB_DIALECT: process.env.DB_DIALECT,
  SCRAPE_SOURCE_01: process.env.SCRAPE_SOURCE_01,    
};

export default ENV;
