import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config();
let pathURI;
console.log(process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'test':
    pathURI = path.join(__dirname, '..', '..', '..', '.env.test');
    break;
  case 'production':
    pathURI = path.join(__dirname, '..', '..', '..', '.env.production');
    break;
  default:
    pathURI = path.join(__dirname, '..', '..', '..', '.env.development');
}

dotenv.config({ path: pathURI });

export const PORT = parseInt(process.env.PORT as string, 10);
