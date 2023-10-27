const portfolioPromptEmail = async () => {
  await fetch('https://api.revolancer.com/cron/portfolio-prompt-email');
};

export default portfolioPromptEmail;
