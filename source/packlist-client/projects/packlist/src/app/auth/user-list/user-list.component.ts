import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';
import {User} from '../../shared/entities';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<User>
  users: User[];

  constructor(
    private userService: UserService
) { }

  ngOnInit(): void {
    this.users$ = this.userService.get();
  }
}
