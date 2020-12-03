import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user$: Observable<UserModel>;

  constructor(private db: AngularFirestore, private  router: Router) {
  }

}
