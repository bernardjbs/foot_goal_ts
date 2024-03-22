import express from 'express';
import sequelizeConnection from './database/connection.js';
import migrate from '@database/migration/index.js';
import seedAll from '@database/seeds/index.js';
import argv from '@utils/args.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Migrate
await migrate(argv('migrate'));

// Seed
await seedAll(argv('seed'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// sequelizeConnection.sync().then(() => {
//   // syncAllModels(argv('migration')); // option as --migration='fresh'
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// });
