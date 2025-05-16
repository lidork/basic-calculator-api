import dotenv from 'dotenv';

dotenv.config(); // reads .env into process.env

// then export typed settings
export const config = {
  port:    Number(process.env.PORT)           || 3000,
  idleMin:  Number(process.env.IDLE_TIMEOUT_MINUTES) || 60,
  logFmt:  process.env.LOG_FORMAT             || 'combined',
  nodeEnv: process.env.NODE_ENV               || 'production',
//   jwtSecret: (() => {
//     if (!process.env.JWT_SECRET) {
//       throw new Error('Missing JWT_SECRET in env');  //when needed, uncomment.
//     }
//     return process.env.JWT_SECRET;
  //})(),
} as const;