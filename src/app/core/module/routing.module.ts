import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule as Router } from '@angular/router';
import { UsersComponent } from '../../ui/pages/users/users.component';
import { AddMatchComponent } from '../../ui/pages/add-match/add-match.component';
import { LoginComponent } from 'src/app/ui/pages/login/login.component';
import { MatchComponent } from 'src/app/ui/pages/match/match.component';
import { HomeComponent } from 'src/app/ui/pages/home/home.component';
import { NotFoundComponent } from 'src/app/ui/widget/not-found/not-found.component';
import { MatchOverviewComponent } from '../../ui/pages/match-overview/match-overview.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LogoutComponent } from 'src/app/ui/widget/logout/logout.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },

  },
  {
    path: 'user',
    component: UsersComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },

  },
  {
    path: 'add-match',
    component: AddMatchComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },

  },
  {
    path: 'match',
    component: MatchComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'match-overview/:id',
    component: MatchOverviewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },

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
