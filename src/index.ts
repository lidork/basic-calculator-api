import mainRouter from './controllers/index'
import express from 'express'
import morgan from 'morgan';


const app = express();
const port = 3000;

//idle time till timeout, in ms
const IDLE_MS = 1000 * 1 * 60; // 1 minute

let idleTimer: NodeJS.Timeout;

function restartIdleTimer(){
  if(idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    console.log(`No requests for the last ${IDLE_MS /1000 / 60} minutes, shutting down API`);
    server.close(() => {
      console.log('Server closed.');
      process.exit(0);
  });
  setTimeout(() => process.exit(1), 10_000);
}, IDLE_MS);
}

app.use(morgan('dev')); //reports logs of GET req to console

app.use('/', mainRouter);

//start the timer on initial load
restartIdleTimer();


const server = app.listen(port, () => {
    console.log(`Calculator API listening at http://localhost:${port}`);
  });

