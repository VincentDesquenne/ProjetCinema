import {Categorie} from './categorie';
import {Realisateur} from './realisateur';

export class Film {
  id?: number;
  titre?: string;
  description?: string;
  duree?: number;
  budget?: number;
  montantRecette?: number;
  dateSortie?: Date;
  noRea?: number;
  codeCat?: string;
  note?: string;
  image?: string;
}
