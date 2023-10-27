const unreadDirectMessages = async () => {
  await fetch('https://api.revolancer.com/cron/unread-direct-messages');
};

export default unreadDirectMessages;
