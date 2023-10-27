const unreadProjectMessages = async () => {
  await fetch('https://api.revolancer.com/cron/unread-project-messages');
};

export default unreadProjectMessages;
