import mainRouter from './controllers/index'
import express from 'express'
import morgan from 'morgan';
import { config } from './config';


const app = express();

//idle time till timeout, in ms
const IDLE_MS = config.idleMin * 1000 * 60

let idleTimer: NodeJS.Timeout;

function restartIdleTimer(){
  if(idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    console.log(`No requests for the last ${config.idleMin} minutes, shutting down API`);
    server.close(() => {
      console.log('Server closed.');
      process.exit(0);
  });
  setTimeout(() => process.exit(1), 10_000);
}, IDLE_MS);
}

app.use(morgan(config.logFmt)); //reports logs of GET req to console

app.use('/', mainRouter);

//start the timer on initial load
restartIdleTimer();


const server = app.listen(config.port, () => {
    console.log(`Calculator API listening at http://localhost:${config.port}`);
  });

