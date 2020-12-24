import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  email: string;
  password: string;

  ngOnInit(): void {
  }

  login(): void {
    this.authService.loginWithEmailAndPassword(this.email, this.password).then(displayName => {
      // User Logged In
    }).catch(error => {
      console.log(error);
    });
  }
}
