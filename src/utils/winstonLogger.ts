import * as dotenv from 'dotenv';
import { createLogger, transports, format } from 'winston';
// import path from 'path';

dotenv.config();

// const LOG_PATH = process.env.LOG_PATH ? process.env.LOG_PATH : '/var/log';
// const LOG_INFO_FILE = process.env.LOG_INFO_FILE
//   ? process.env.LOG_INFO_FILE
//   : 'activity.log';
// const LOG_ERROR_FILE = process.env.LOG_ERROR_FILE
//   ? process.env.LOG_ERROR_FILE
//   : 'error.log';

const customFormat = format.combine(
  format.timestamp(),
  format.errors({
    stack: true,
  }),
  format.printf(
    (info) =>
      `[ ${info.level.toUpperCase()} ] ${info.timestamp}: ${info.message}${
        info.stack ? '\n' : ''
      }${info.stack ? info.stack : ''}\n`,
  ),
);

// const logPath = path.join(LOG_PATH, LOG_INFO_FILE);
// const errorPath = path.join(LOG_PATH, LOG_ERROR_FILE);

const Logger = createLogger({
  format: customFormat,
  transports: [
    new transports.Console({ level: 'debug' }),
    // new transports.File({ filename: logPath, level: 'info' }),
    // new transports.File({ filename: errorPath, level: 'error' }),
  ],
});

export default Logger;
