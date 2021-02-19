import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {UserService} from './user.service';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserComponent, UserListComponent],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports: [
    UserListComponent
  ]
})
export class AuthModule { }
