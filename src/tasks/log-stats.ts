const logStats = async () => {
  await fetch('https://api.revolancer.com/cron/log-stats');
};

export default logStats;
