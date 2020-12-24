import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { Router, CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private authGaurd: AngularFireAuthGuard, public router: Router) { }

  async loginWithEmailAndPassword(email: string, password: string): Promise<string> {
    const signInWithEmailAndPassword = this.auth.signInWithEmailAndPassword(email, password);
    signInWithEmailAndPassword.catch(error => {
      throw error;
    });
    const credentials = await signInWithEmailAndPassword;
    return credentials.user.displayName;
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['login']);
    }).catch(e => { console.log(e) });
  }
}
