import {Component, OnInit, ViewChild} from '@angular/core';
import {RadDataFormComponent} from 'nativescript-ui-dataform/angular';
import {Login} from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: Login;
  @ViewChild('loginFormComp') loginFormComp: RadDataFormComponent;
  constructor() { }

  ngOnInit() {
    this.loginData = new Login('', '');
  }

  onLogin(event) {
    console.log(event);
  }

}
