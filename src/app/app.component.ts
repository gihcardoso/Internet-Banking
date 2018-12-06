import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'FlowBank';
  //isLogado = false;

 /* ngOnInit(): void {
    if (location.pathname === '/') {
      this.isLogado = false;
    } else {
      this.isLogado = true;
    }
  }
  */

 constructor(private authService: AuthService) { }

 isLogado(): boolean {
  if (this.authService.usuarioEstaLogado()) {
    console.log('true')
    return true
  } else {
    console.log('false')            
    return false
  }

}

}
