import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule as Router } from '@angular/router';
import { UsersComponent } from '../../ui/pages/users/users.component';
import { AddMatchComponent } from '../../ui/pages/add-match/add-match.component';
import { LoginComponent } from 'src/app/ui/pages/login/login.component';
import { MatchComponent } from 'src/app/ui/pages/match/match.component';
import { HomeComponent } from 'src/app/ui/pages/home/home.component';
import { NotFoundComponent } from 'src/app/ui/widget/not-found/not-found.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UsersComponent
  },
  {
    path: 'add-match',
    component: AddMatchComponent
  },
  {
    path: 'match',
    component: MatchComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: AddMatchComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Router.forRoot(routes),
  ]
})
export class RoutingModule { }
