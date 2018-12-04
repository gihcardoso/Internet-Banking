import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import {loginService } from '../services/loginService';
import {login} from '../models/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  constructor() { 


  }

  ngOnInit() {
  }

}
