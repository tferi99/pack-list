import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_BASE} from './constants';
import {AppInjector} from './app-injector';

export class CrudBaseService<T, IDT> {
  apiBasePath: string;
  http: HttpClient;

  constructor(
    apiBasePath: string,
  ) {
    this.apiBasePath = apiBasePath;

    const injector = AppInjector.getInjector();
    this.http = injector.get(HttpClient);
  }

  get(id: IDT): Observable<T> {
    return this.http.get<T>(API_BASE + this.apiBasePath + '/' + id);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(API_BASE + this.apiBasePath);
  }

  create(dto: T): Observable<T> {
    return this.http.post<T>(API_BASE + this.apiBasePath, dto);
  }

  save(dto: T): Observable<T> {
    return this.http.put<T>(API_BASE + this.apiBasePath, dto);
  }

  delete(id: IDT): Observable<any> {
    return this.http.delete<IDT>(API_BASE + this.apiBasePath + '/' + id);
  }
}
