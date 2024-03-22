import express from 'express';
import migrate from '@database/migration/index.js';
import seedAll from '@database/seeds/index.js';
import argv from '@utils/args.js';
import routes from '@controllers/index.js'
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Migrate
await migrate(argv('migrate'));

// Seed
await seedAll(argv('seed'));


app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
