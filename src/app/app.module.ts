import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './ui/pages/users/users.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddMatchComponent } from './ui/pages/add-match/add-match.component';
import { MatButtonModule } from '@angular/material/button';
import { RoutingModule } from './core/module/routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RouterModule } from '@angular/router';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './ui/pages/login/login.component';
import { ToolbarComponent } from './ui/widget/toolbar/toolbar.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddMatchComponent,
    LoginComponent,
    ToolbarComponent
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
    MatTooltipModule,
    MatButtonModule,
    RouterModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
