import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  containerStyle: any;

  constructor() { }

  ngOnInit(): void {
    this.containerStyle = "container";
  }

  signIn(): void {
    this.containerStyle = "container";
  }

  signUp(): void {
    this.containerStyle = "container right-panel-active";
  }

}
