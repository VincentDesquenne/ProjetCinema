import {Component, OnInit} from '@angular/core';
import {Film} from '../../models/film';
import {Acteur} from '../../models/acteur';
import {ActeurService} from '../../services/acteur.service';

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrls: ['./acteur.component.css']
})
export class ActeurComponent implements OnInit {

  public page: any;
  public mesActeurs: Acteur[];

  constructor(private acteurService: ActeurService) {
  }

  ngOnInit(): void {
    this.findActeurs();
  }

  findActeurs(): void {
    this.acteurService.getActeursListe().subscribe(
      (acteurs) => {
        this.mesActeurs = acteurs;
      }
    );
  }

  public onPageChanged(event) {
    this.page = event;

  }

  buildAvatarLink(acteur: Acteur) {
    return acteur.photo;
  }

}
