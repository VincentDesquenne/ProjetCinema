import {Component, OnInit} from '@angular/core';
import {Film} from '../../models/film';
import {Acteur} from '../../models/acteur';
import {ActeurService} from '../../services/acteur.service';
import {Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrls: ['./acteur.component.css']
})
export class ActeurComponent implements OnInit {

  public page: any;
  public mesActeurs: Acteur[];

  constructor(private acteurService: ActeurService, private routeur: Router, private domSanitizer: DomSanitizer) {
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

  openActeur(acteur): void{
    this.routeur.navigate(['/acteur/'+ acteur.id]);
  }

  public onPageChanged(event) {
    this.page = event;

  }

  buildAvatarLink(acteur: Acteur) {
    return acteur.image;
  }

  buildImg(acteur: Acteur) {
    let res = 'data:image/png;base64, ' + acteur.image;
    let base64img = this.domSanitizer.bypassSecurityTrustUrl(res);
    return base64img;
  }

}
