import tracer from 'tracer';
import logStats from './tasks/log-stats.js';

const dispatch = (task: string) => {
  const logger = tracer.colorConsole();
  switch (task) {
    case 'log-stats':
      logStats();
      break;

    default:
      logger.error(`Unknown task ${task}`);
      break;
  }
};

export default dispatch;
