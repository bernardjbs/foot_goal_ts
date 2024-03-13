import dotenv from 'dotenv';
import path from 'path';

const filePath = new URL(import.meta.url).pathname;
const directoryPath = path.dirname(filePath.startsWith('/') ? filePath.slice(1) : filePath);

dotenv.config({ path: path.resolve(directoryPath, '../../../.env') });

const ENV = {
  PORT: process.env.PORT
};

export default ENV;
