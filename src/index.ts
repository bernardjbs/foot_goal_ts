import express from 'express';
import sequelize from '@config/connection.js';
const app = express();
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server HAO is running on http://localhost:${PORT}`);
  });
});
