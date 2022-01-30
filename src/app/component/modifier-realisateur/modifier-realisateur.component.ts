import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RealisateurService} from '../../services/realisateur.service';
import {Realisateur} from '../../models/realisateur';

@Component({
  selector: 'app-modifier-realisateur',
  templateUrl: './modifier-realisateur.component.html',
  styleUrls: ['./modifier-realisateur.component.css']
})
export class ModifierRealisateurComponent implements OnInit {

  containerStyle: any;
  modifRealisateurForm: FormGroup;
  realisateurTable: Realisateur[];

  constructor(private unRS: RealisateurService) { }

  idControl: FormControl = new FormControl('', Validators.required);
  prenomControl: FormControl = new FormControl('', Validators.required);
  nomControl: FormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.containerStyle = 'container';
    this.modifRealisateurForm = new FormGroup({
        id: this.idControl,
        prenom: this.prenomControl,
        nom: this.nomControl
      });
    this.listerRea();
  }

  listerRea(): void{
    this.unRS.getRealisateursListe().subscribe(
      reaResponse => {
        this.realisateurTable = reaResponse;
        console.log('Réussi');
      },
      error => {
        console.log('Recupération realisateur impossible');
      }
    );
  }

  modifRealisateur(): void{

    let unRea: Realisateur;

    unRea = new Realisateur();
    unRea.noRea = this.idControl.value;
    unRea.nom = this.nomControl.value;
    unRea.prenom = this.prenomControl.value;

    if(unRea.nom != "" && unRea.prenom != ""){
      this.unRS.updateRealisateur(unRea).subscribe(
        reponse => {
          alert('Modification réalisateur réussi');
          console.log('Réussi');
        },
        err => {
          alert('Erreur dans la modification du réalisateur');
          console.log('Echec');
        }
      );
    } else {
      alert("Les champs doivent être complets")
    }

  }

}
