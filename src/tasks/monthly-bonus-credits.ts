const monthlyBonusCredits = async () => {
  await fetch('https://api.revolancer.com/cron/monthly-bonus-credits');
};

export default monthlyBonusCredits;
