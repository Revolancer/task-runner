import tracer from 'tracer';
import minimist from 'minimist';
import dispatch from './dispatch.js';

const logger = tracer.colorConsole();
const argv = minimist(process.argv.slice(2));

const main = () => {
  if (argv.h || argv.help || argv._[0] === 'help') {
    logger.info('Available tasks:\n * log-stats');
    return;
  }
  if (!argv._[0] || typeof argv._[0] !== 'string') {
    logger.error(
      'Please pass a task name to run, e.g. `npm run exec log-stats`',
    );
    return;
  }

  const task = argv._[0];

  logger.info(`running task ${task}`);
  dispatch(task);
};

main();
