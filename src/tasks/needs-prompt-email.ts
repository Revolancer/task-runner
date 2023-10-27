const needsPromptEmail = async () => {
  await fetch('https://api.revolancer.com/cron/needs-prompt-email');
};

export default needsPromptEmail;
