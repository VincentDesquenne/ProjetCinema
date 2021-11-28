import {Realisateur} from '../models/realisateur';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Personnage} from '../models/personnage';

const personnageList: Personnage[] = [
  {
    nomPersonnage: "John", acteur: {
      noAct : 1, nomAct: "joe", prenAct: "joe"
    }, film: {
      noFilm: 1, budget: 5000000
    }

  },

];

@Injectable()
export class PersonnageService{

}
