import dotenv from 'dotenv';
import path from 'path';
const directoryPath = path.dirname(__filename);

dotenv.config({ path: path.resolve(directoryPath, '../../.env') });
export const { PORT, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } = { ...process.env } as {
  [key: string]: string;
};
