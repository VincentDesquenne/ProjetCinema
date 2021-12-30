import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  connected: boolean;
  cinemaepul: string;
  constructor() { }

  ngOnInit(): void {
    this.connected = window.localStorage.getItem("user").length > 0;
    this.connected ? this.cinemaepul = "/welcome" : this.cinemaepul = "/connexion";
  }

  deconnexion(): void {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("role")
  }

}
