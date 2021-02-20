import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {RouterModule} from '@angular/router';
import {UserFormComponent} from './user-form/user-form.component';
import {UserMainComponent} from './user-main/user-main.component';

@NgModule({
  declarations: [UserListComponent, UserFormComponent, UserMainComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
  ],
  exports: [
    UserListComponent
  ]
})
export class AuthModule { }
