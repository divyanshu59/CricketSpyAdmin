import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule as Router } from '@angular/router';
import { UsersComponent } from '../../ui/pages/users/users.component';
import { AddMatchComponent } from '../../ui/pages/add-match/add-match.component';

const routes = [
  {
    path: 'user',
    component: UsersComponent
  },
  {
    path: 'add-match',
    component: AddMatchComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Router.forRoot(routes),
  ]
})
export class RoutingModule { }
