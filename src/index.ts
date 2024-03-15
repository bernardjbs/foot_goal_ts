import express from 'express';
import sequelizeConnection from './database/connection.js';
import { Umzug, SequelizeStorage } from 'umzug';
import argv from '@utils/args.js';

const umzug = new Umzug({
  migrations: { glob: 'migrations/*.js' },
  context: sequelizeConnection.getQueryInterface(),
  // storage: new SequelizeStorage(sequelizeConnection),
  logger: console
});

export type Migration = typeof umzug._types.migration;

const init = async (migration: string | boolean | null) => {
  try {
    console.log('Syncing Database... ');

    if (migration == 'fresh') {
      await sequelizeConnection.sync({ force: true });
    } else {
      await sequelizeConnection.sync();
    }

    console.log(`Database synced,${migration ? ' ' + migration : ''} migration in progress...`);

    try {
      await umzug.up();
      console.log('Migration done!');
    } catch (error) {
      console.log(error);
      throw new Error('Database Migration Error!');
    }
  } catch (error) {
    console.log(error);
  }
};

export const syncAllModels = async (migration: string | boolean | null) => {
  await init(migration);
};

const app = express();
const PORT = process.env.PORT || 3000;

sequelizeConnection.sync().then(() => {
  syncAllModels(argv('migration')); // option as --migration='fresh'
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
