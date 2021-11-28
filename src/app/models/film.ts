import {Categorie} from './categorie';
import {Realisateur} from './realisateur';

export interface Film {
  noFilm?: number;
  titre?: string;
  description?: string;
  duree?: number;
  budget?: number;
  montantRecette?: number;
  dateSortie?: Date;
  realisateur?: Realisateur;
  categorie?: Categorie;
  note?: string;
}
