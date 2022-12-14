import { ENVIRONMENT } from './environment.type';
import packageInfo from '../../package.json';

export const environment = {
  NODE_ENV: ENVIRONMENT.PRODUCTION,
  production: true,
  clientName: packageInfo.name,
  version: packageInfo.version,
  apiBaseUrl: 'https://noti-api.kipolo.co.kr/',
};
