import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from './shared/page404/page404.component';
import {UserResolverService} from './auth/user-resolver.service';
import {UserFormComponent} from './auth/user-form/user-form.component';
import {UsersResolverService} from './auth/users-resolver.service';
import {UserMainComponent} from './auth/user-main/user-main.component';

const routes: Routes = [
  {path: 'user', component: UserMainComponent, resolve: {users: UsersResolverService}, runGuardsAndResolvers: 'always'},
  {path: 'user/new', component: UserFormComponent},
  {path: 'user/:id/edit', component: UserFormComponent, resolve: {user: UserResolverService}},


  { path: '',   redirectTo: '/user', pathMatch: 'full' },   // default
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
