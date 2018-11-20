import {Component, OnInit, ViewChild} from '@angular/core';
import {RadDataFormComponent} from 'nativescript-ui-dataform/angular';
import {Login} from '../login.model';
import {RouterExtensions} from 'nativescript-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginData: Login;
  private _metadata;
  @ViewChild('loginFormComp') loginFormComp: RadDataFormComponent;

  constructor(private routerExtensions: RouterExtensions) {
  }

  ngOnInit() {
    this._metadata = require('./login-metadata.json');
    this.loginData = new Login('', '');
  }

  onLogin() {
    if (this.loginFormComp.dataForm.hasValidationErrors()) {
      return;
    }
    console.log(this.loginData);
    this.routerExtensions.navigate(['/home']);
  }

  get metadata() {
    return this._metadata;
  }

}
