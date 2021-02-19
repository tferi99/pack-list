import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_BASE} from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  get<User>(): Observable<User> {
    return this.http.get<User>(API_BASE + '/user');
  }
}
