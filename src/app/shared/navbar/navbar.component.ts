import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  connected: boolean;
  cinemaepul: string;
  admin: boolean;
  constructor() { }

  ngOnInit(): void {
    this.connected = window.localStorage.getItem("user").length > 0;
    this.connected ? this.cinemaepul = "/welcome" : this.cinemaepul = "/connexion";
    this.admin = window.localStorage.getItem("role") == "admin" ? true : false;
  }

  deconnexion(): void {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("role")
  }

}
