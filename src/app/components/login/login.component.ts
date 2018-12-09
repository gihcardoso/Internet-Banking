import { Component, OnInit } from '@angular/core';

// Imports manuais - Pro Login funfar e pah
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ILogin } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: ILogin = {
    cpf: null,
    senha: null,
  };

  constructor(private authService: AuthService,
    private router: Router,
    private authGuard: AuthGuard) {
  }

  ngOnInit() {
    if (this.authGuard.canActivate()) {
      this.router.navigate(['home']);
    }
  }

  fazerLogin() {
    console.log(this.login);
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
