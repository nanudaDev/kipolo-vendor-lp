import { API_RESPONSE_TYPE } from './response.origin.type';

export class API_RESPONSE<T> {
  data!: T;
  responseOrigin!: API_RESPONSE_TYPE;
}
