import winston from 'winston';
// import { createLogger, transports, format, config } from 'winston';
const { combine, timestamp, json, prettyPrint, colorize, printf } = winston.format;

const infoFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const errorTransports = [
  new winston.transports.Console({
    level: 'error',
    format: combine(timestamp(), colorize(), infoFormat),
  }),
  new winston.transports.File({
    filename: 'error.log',
    level: 'error',
    format: combine(timestamp(), json(), prettyPrint()),
  }),
];

const infoTransports = [
  new winston.transports.Console({
    level: 'info',
    format: combine(timestamp(), colorize(), infoFormat),
  }),
  new winston.transports.File({
    level: 'info',
    filename: 'info.log',
    format: combine(timestamp(), json(), prettyPrint()),
  }),
];

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [...errorTransports, ...infoTransports],
  exceptionHandlers: [
    new winston.transports.File({
      filename: 'error.log',
      format: combine(timestamp(), json(), prettyPrint()),
    }),
  ],
  // rejectionHandlers: [new winston.transports.File({ filename: 'rejections.log' })],
});

export default logger;
