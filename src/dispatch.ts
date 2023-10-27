import tracer from 'tracer';
import captureSpotStats from './tasks/capture-spot-stats.js';
import monthlyBonusCredits from './tasks/monthly-bonus-credits.js';
import unreadDirectMessages from './tasks/unread-direct-messages.js';
import unreadProjectMessages from './tasks/unread-project-messages.js';
import needsPromptEmail from './tasks/needs-prompt-email.js';
import portfolioPromptEmail from './tasks/portfolio-prompt-email.js';

const dispatch = (task: string) => {
  const logger = tracer.colorConsole();
  switch (task) {
    case 'capture-spot-stats':
      captureSpotStats();
      break;
    case 'monthly-bonus-credits':
      monthlyBonusCredits();
      break;
    case 'unread-direct-messages':
      unreadDirectMessages();
      break;
    case 'unread-project-messages':
      unreadProjectMessages();
      break;
    case 'needs-prompt-email':
      needsPromptEmail();
      break;
    case 'portfolio-prompt-email':
      portfolioPromptEmail();
      break;
    default:
      logger.error(`Unknown task ${task}`);
      break;
  }
};

export default dispatch;
