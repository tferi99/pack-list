import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './auth/user-list/user-list.component';
import {Page404Component} from './shared/page404/page404.component';

const routes: Routes = [
  { path: 'user', component: UserListComponent },

  { path: '',   redirectTo: '/user', pathMatch: 'full' },   // default
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
