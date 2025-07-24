import app from './app';
import config from './config/config';
import { ping } from './utils/ping';

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
  setInterval(ping, 4 * 60 * 1000);
});
