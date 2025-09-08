import winston from 'winston';

const colors = {
  info: '\x1b[30m\x1b[42m',
  error: '\x1b[37m\x1b[41m',
  reset: '\x1b[0m',
};

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.printf(({ level, message }) => {
      const color = colors[level] || '';
      return `${color}[${level.toUpperCase()}] ${message}${colors.reset}`;
    })
  ),
  transports: [new winston.transports.Console()],
});
export default logger;
