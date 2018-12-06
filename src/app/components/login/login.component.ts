import { Component, OnInit } from '@angular/core';

// Imports manuais - Pro Login funfar e pah
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = {};

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  fazerLogin() {
    this.authService.fazerLogin2(this.login)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['home']);
        },
        err => console.log(err)
      );
  }

}
