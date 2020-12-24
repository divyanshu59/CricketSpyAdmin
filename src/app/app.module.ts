import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './ui/pages/users/users.component';
import { AddMatchComponent } from './ui/pages/add-match/add-match.component';
import { RoutingModule } from './core/module/routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RouterModule } from '@angular/router';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './ui/pages/login/login.component';
import { ToolbarComponent } from './ui/widget/toolbar/toolbar.component';
import { SidenavComponent } from './ui/widget/sidenav/sidenav.component';
import { MaterialModule } from './core/module/material.module';
import { MatchComponent } from './ui/pages/match/match.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { NotFoundComponent } from './ui/widget/not-found/not-found.component';
import { MatchOverviewComponent } from './ui/pages/match-overview/match-overview.component';
import { LoadingComponent } from './ui/widget/loading/loading.component';
import { LogoutComponent } from './ui/widget/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddMatchComponent,
    LoginComponent,
    ToolbarComponent,
    SidenavComponent,
    MatchComponent,
    HomeComponent,
    NotFoundComponent,
    MatchOverviewComponent,
    LoadingComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    RoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBWawKOXyf9_buQJZe7rCRGLZzYtxrHxgA',
      authDomain: 'cricketspy-55ffb.firebaseapp.com',
      databaseURL: 'https://cricketspy-55ffb.firebaseio.com',
      projectId: 'cricketspy-55ffb',
      storageBucket: 'cricketspy-55ffb.appspot.com',
      messagingSenderId: '61333460471',
      appId: '1:61333460471:web:652c22e04fae6ef07a8af2',
      measurementId: 'G-DM3EJSN9N5'
    }),
    AngularFireStorageModule,
    RouterModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
