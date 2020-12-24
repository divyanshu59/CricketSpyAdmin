import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  email: string;
  password: string;

  ngOnInit(): void {
  }

  login(): void {
    this.authService.loginWithEmailAndPassword(this.email, this.password).then(displayName => {
      // User Logged In
      this.router.navigate(['']);

    }).catch(error => {
      console.log(error);
    });
  }
}
