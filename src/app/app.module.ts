import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './ui/users/users.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddMatchComponent } from './ui/add-match/add-match.component';
import {MatButtonModule} from '@angular/material/button';
import {RoutingModule} from './core/module/routing.module';
import {AngularFireModule} from '@angular/fire';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddMatchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    RouterModule,
    MatIconModule,
    RoutingModule,
    MatSortModule,
    MatInputModule,
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
    MatTooltipModule,
    MatButtonModule,
    RouterModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
