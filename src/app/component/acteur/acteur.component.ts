import { Component, OnInit } from '@angular/core';
import {Film} from '../../models/film';
import {Acteur} from '../../models/acteur';

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrls: ['./acteur.component.css']
})
export class ActeurComponent implements OnInit {

  public page:any;
  public acteurList: Acteur[] = [
    {
      noAct:1,
      nomAct: "Dujardin",
      prenAct: "Jean",
      dateNaiss: new Date(1972,6,19),
      photo: "../../../assets/img/jeandujardin.jpg"
    },
    {
      noAct:1,
      nomAct: "Dujardin",
      prenAct: "Jean",
      dateNaiss: new Date(1972,6,19),
      photo: "../../../assets/img/jeandujardin.jpg"
    },
    {
      noAct:1,
      nomAct: "Dujardin",
      prenAct: "Jean",
      dateNaiss: new Date(1972,6,19),
      photo: "../../../assets/img/jeandujardin.jpg"
    },
    {
      noAct:1,
      nomAct: "Dujardin",
      prenAct: "Jean",
      dateNaiss: new Date(1972,6,19),
      photo: "../../../assets/img/jeandujardin.jpg"
    },
    {
      noAct:1,
      nomAct: "Dujardin",
      prenAct: "Jean",
      dateNaiss: new Date(1972,6,19),
      photo: "../../../assets/img/jeandujardin.jpg"
    },
    {
      noAct:1,
      nomAct: "Dujardin",
      prenAct: "Jean",
      dateNaiss: new Date(1972,6,19),
      photo: "../../../assets/img/jeandujardin.jpg"
    },
    {
      noAct:1,
      nomAct: "Dujardin",
      prenAct: "Jean",
      dateNaiss: new Date(1972,6,19),
      dateDeces: new Date()
    },
    {
      noAct:1,
      nomAct: "Dujardin",
      prenAct: "Jean",
      dateNaiss: new Date(1972,6,19),
      photo: "../../../assets/img/jeandujardin.jpg"
    },
    {
      noAct:1,
      nomAct: "Dujardin",
      prenAct: "Jean",
      dateNaiss: new Date(1972,6,19),
      photo: "../../../assets/img/jeandujardin.jpg"
    },
    {
      noAct:1,
      nomAct: "Dujardin",
      prenAct: "Jean",
      dateNaiss: new Date(1972,6,19),
      photo: "../../../assets/img/jeandujardin.jpg"
    },
    {
      noAct:1,
      nomAct: "Dujardin",
      prenAct: "Jean",
      dateNaiss: new Date(1972,6,19),
      photo: "../../../assets/img/jeandujardin.jpg"
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  public onPageChanged(event){
    this.page = event;

  }

  buildAvatarLink(acteur: Acteur) {
    return acteur.photo;
  }

}
