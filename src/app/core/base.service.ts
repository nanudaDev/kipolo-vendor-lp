import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { HTTP_METHOD } from '../shared';
import { environment } from 'src/environments';
import { PaginatedRequest, PaginatedResponse } from '../common';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private readonly httpClient: HttpClient) {}

  private __makeArrayParam(value: any): HttpParams {
    const s: any = [];

    const add = (k: string, v: any) => {
      v = typeof v === 'function' ? v() : v;
      v = v === null ? '' : v === undefined ? '' : v;
      s.push(encodeURIComponent(k) + '=' + encodeURIComponent(v));
    };

    const buildParams = (prefix: string, obj: any) => {
      if (prefix) {
        if (Array.isArray(obj)) {
          obj.forEach((v, i) =>
            buildParams(
              prefix + '[' + (typeof v === 'object' && v ? i : '') + ']',
              v
            )
          );
        } else if (String(obj) === '[object Object]') {
          Object.keys(obj).forEach((key) =>
            buildParams(prefix + '[' + key + ']', obj[key])
          );
        } else {
          add(prefix, obj);
        }
      } else if (Array.isArray(obj)) {
        obj.forEach((v) => add(v.name, v.value));
      } else {
        Object.keys(obj).forEach((key) => buildParams(key, obj[key]));
      }
      return s;
    };

    const params = buildParams('', value).join('&');

    return new HttpParams({ fromString: params });
  }

  private __api<T>(
    method: HTTP_METHOD,
    path: string,
    params?: any
  ): Observable<T> {
    if (path.indexOf('http') !== 0) {
      path = environment.apiBaseUrl + path;
    }

    const headersOptions: any = {
      'x-client-name': environment.clientName,
      'x-client-version': environment.version,
      // 'Content-Type': 'application/json',
      // Accept: 'application/json',
    };

    // const accessToken = this.jwtService.getToken();
    // if (accessToken) {
    //   headersOptions.Authorization = `Bearer ${accessToken}`;
    // }

    const headers = new HttpHeaders(headersOptions);
    if (params) {
      params = this.__makeArrayParam(params);
    }

    if (method === HTTP_METHOD.get) {
      return this.httpClient.get(path, { params, headers }) as Observable<T>;
    } else if (method === HTTP_METHOD.post) {
      return this.httpClient.post(path, params, { headers }) as Observable<T>;
    } else if (method === HTTP_METHOD.patch) {
      return this.httpClient.patch(path, params, { headers }) as Observable<T>;
    } else if (method === HTTP_METHOD.delete) {
      return this.httpClient.delete(path, { params, headers }) as Observable<T>;
    }
    return this.httpClient[method](path, params) as Observable<T>;
  }

  protected get<T>(path: string, params?: Params): Observable<T> {
    return this.__api(HTTP_METHOD.get, path, params);
  }

  protected post<T>(path: string, params?: Params): Observable<T> {
    return this.__api(HTTP_METHOD.post, path, params);
  }

  protected patch<T>(path: string, params?: Params): Observable<T> {
    return this.__api(HTTP_METHOD.patch, path, params);
  }

  protected delete<T>(path: string, params?: Params): Observable<T> {
    return this.__api(HTTP_METHOD.delete, path, params);
  }

  protected paginate<T>(
    path: string,
    params: Params,
    pagination: PaginatedRequest
  ): Observable<PaginatedResponse<T>> {
    let request = {};

    if (params instanceof PaginatedRequest) {
      request = {
        skip: String(params['limit'] * params['page']),
        take: String(params['limit']),
      };
    } else {
      request = {
        ...params,
        skip: String(pagination.page),
        take: String(pagination.limit),
      };
    }
    return this.__api(HTTP_METHOD.get, path, request);
  }

  protected parameterSwitcher(
    apiUrl: string,
    indicator?: string,
    paramater?: any
  ) {
    if (indicator) {
      apiUrl = apiUrl.replace(indicator, paramater);
      return apiUrl;
    } else {
      return apiUrl;
    }
  }
}
