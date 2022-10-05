import { API_RESPONSE } from '.';

export class PaginatedResponse<T> {
  items!: API_RESPONSE<T>;
  totalCount: number = 0;
}

export class PaginatedRequest {
  limit = 20;
  page: number = 1;
  totalCount?: number = 0;
}
