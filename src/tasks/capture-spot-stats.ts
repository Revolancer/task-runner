const captureSpotStats = async () => {
  await fetch('https://api.revolancer.com/cron/capture-spot-stats');
};

export default captureSpotStats;
