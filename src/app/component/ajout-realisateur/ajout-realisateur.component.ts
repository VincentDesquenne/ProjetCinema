import { Component, OnInit } from '@angular/core';
import {RealisateurService} from '../../services/realisateur.service';
import {Realisateur} from '../../models/realisateur';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajout-realisateur',
  templateUrl: './ajout-realisateur.component.html',
  styleUrls: ['./ajout-realisateur.component.css']
})
export class AjoutRealisateurComponent implements OnInit {

  ajoutRealisateurForm: FormGroup;

  constructor(private unRS: RealisateurService,private router: Router) { }

  prenomControl: FormControl = new FormControl('', Validators.required);
  nomControl: FormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.ajoutRealisateurForm = new FormGroup({
        prenom: this.prenomControl,
        nom: this.nomControl
      }
    );
  }

  ajoutRealisateur(): void{

    let unRea: Realisateur;

    unRea = new Realisateur();
    unRea.nom = this.nomControl.value;
    unRea.prenom = this.prenomControl.value;

    if(unRea.nom != "" && unRea.prenom != ""){
      this.unRS.addRealisateur(unRea).subscribe(
        reponse => {
          alert('Ajout Réalisateur réussi');
          console.log('Réussi');
          this.router.navigate(['/films'])
        },
        err => {
          alert('Erreur dans ajout du réalisateur');
          console.log('Echec');
        }
      );
    } else {
      alert("Les champs doivent être complets")
    }

  }

}
