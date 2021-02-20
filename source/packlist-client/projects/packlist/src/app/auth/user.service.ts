import {Injectable} from '@angular/core';
import {CrudBaseService} from '../shared/crud-base.service';
import {User} from '../shared/entities';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudBaseService<User, number> {
  constructor() {
    super('/user');
  }
}
