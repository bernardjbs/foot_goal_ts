import express from 'express';
import session from 'express-session';
import migrate from '@database/migration/index.js';
import seedAll from '@database/seeds/index.js';
import argv from '@utils/args.js';
import routes from '@controllers/index.js';
import bodyParser from 'body-parser';
import { DataTypes } from '@sequelize/core';
// import SequelizeStore from 'connect-session-sequelize';
import sequelizeConnection from '@database/connection.js';
import User from '@database/models/User.js';
import SequelizeStoreConstructor from 'connect-session-sequelize'; // Import the constructor type
import { processEnv } from '@utils/processEnv.js';

const SequelizeStore = SequelizeStoreConstructor(session.Store); // Create the constructor using the provided session.Store

declare module 'express-session' {
  interface SessionData {
    userId?: string;
    fruit?: string;
    loggedIn?: boolean;
  }
}

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const Session = sequelizeConnection.define('Session', {
  sid: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  userId: DataTypes.INTEGER,
  expires: DataTypes.DATE,
  data: DataTypes.TEXT
});

const sessionStore = new SequelizeStore({
  db: sequelizeConnection,
  table: 'Session'
});

const sess = {
  secret: processEnv().JWT_SECRET as string,
  cookie: {
    maxAge: 3000000 // Setup session timeout
  },
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  limit: 1
};

app.use(session(sess));

// Migrate
await migrate(argv('migrate'));

// Seed
await seedAll(argv('seed'));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
