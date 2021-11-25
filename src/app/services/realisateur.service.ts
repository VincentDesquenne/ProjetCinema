import {Realisateur} from '../models/realisateur';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from './crud-service';

const realisateurList: Realisateur[] = [
  {
    noRea: 1, nomRea: "Besson", prenRea: "Luc"
  },
  {
    noRea: 2, nomRea: "Besson", prenRea: "Luc"

  }

];

@Injectable()
export class DepartementService extends CrudService<Realisateur> {
  constructor(http: HttpClient) {
    super(http, "realisateur");
  }
}
