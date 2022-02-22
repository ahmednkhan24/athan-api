import { main } from './athan';

const dev = async () => {
  const requests = await main();
  const filtered = requests.map((request) => ({
    scheduledTime: request.trigger.scheduledTime,
    message: request.alertInfo.spokenInfo.content[0].text
  }));

  console.log(filtered);
};

dev();
