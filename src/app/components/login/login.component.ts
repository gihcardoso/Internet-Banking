import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

// Imports manuais - Pro Login funfar e pah
import { AuthService } from '../../services/auth.service';
import { Login } from '../../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // private login: Login = new Login();

  login = {}
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  fazerLogin() {
    console.log(this.login);
    this.authService.fazerLogin2(this.login)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['home']);
        },
        err => console.log(err)
      )
  }

}
