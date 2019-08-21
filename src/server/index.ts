import { AppServer } from './Server';

import { PORT } from './utils/config';

const appServer = new AppServer();

appServer.start(PORT);
