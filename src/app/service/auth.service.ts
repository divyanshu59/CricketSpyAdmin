import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  async loginWithEmailAndPassword(email: string, password: string): Promise<string>{
    const signInWithEmailAndPassword = this.auth.signInWithEmailAndPassword(email, password);
    signInWithEmailAndPassword.catch(error => {
      throw error;
    });
    const credentials = await signInWithEmailAndPassword;
    return credentials.user.displayName;
  }
}
