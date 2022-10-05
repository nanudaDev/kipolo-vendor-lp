import { ENVIRONMENT } from './environment.type';
import packageInfo from '../../package.json';

export const environment = {
  NODE_ENV: ENVIRONMENT.DEVELEOPMENT,
  production: false,
  clientName: packageInfo.name,
  version: packageInfo.version,
  apiBaseUrl: 'http://localhost:4400/',
};
