import mainRouter from './controllers/index'
import express from 'express'

const app = express();
const port = 3000;

app.use('/', mainRouter);

app.listen(port, () => {
    console.log(`Calculator API listening at http://localhost:${port}`);
  });

