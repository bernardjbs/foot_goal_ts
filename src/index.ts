import express from 'express';
import sequelizeConnection from './database/connection.js';
import { Umzug, SequelizeStorage } from 'umzug';

const umzug = new Umzug({
  migrations: { glob: 'migrations/*.js' },
  context: sequelizeConnection.getQueryInterface(),
  // storage: new SequelizeStorage(sequelizeConnection),
  logger: console
});

export type Migration = typeof umzug._types.migration;

const init = async (migrationType: string) => {
  try {
    console.log('Syncing Database... ');

    if (migrationType == 'fresh') {
      await sequelizeConnection.sync({ force: true });
    } else {
      await sequelizeConnection.sync();
    }

    console.log('Database synced, Migrating...');
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

export const syncAllModels = async (migrationType:string = '') => {
  await init(migrationType);
};

const app = express();
const PORT = process.env.PORT || 3000;

sequelizeConnection.sync().then(() => {
  syncAllModels('fresh');
  app.listen(PORT, () => {
    console.log(`Server HAO is running on http://localhost:${PORT}`);
  });
});