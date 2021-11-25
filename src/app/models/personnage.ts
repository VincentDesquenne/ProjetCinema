import {Film} from './film';
import {Acteur} from './acteur';

export interface Personnage {
  film?: Film;
  acteur?: Acteur;
  nomPersonnage?: string;
}
