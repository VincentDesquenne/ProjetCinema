import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../../models/utilisateur';
import {ConnexionService} from '../../services/connexion.service';
import {Router} from '@angular/router';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  containerStyle: any;
  private userLogin: string;
  private userMdp: string;
  private unUtilisateur: Utilisateur;
  private errorMessage: string = '';
  private reponse : Response;
  loginForm : FormGroup;
  connexionForm: FormGroup;

  constructor(private unCS: ConnexionService, private router: Router) { }

  nomControl: FormControl = new FormControl('', Validators.required);
  prenomControl: FormControl = new FormControl('', Validators.required);
  mdpControl: FormControl = new FormControl('', Validators.required);
  emailControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  nomUtilControl: FormControl = new FormControl('', Validators.required);
  motPasseControl: FormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.containerStyle = 'container';
    this.loginForm = new FormGroup({
      nom: this.nomControl,
      prenom: this.prenomControl,
      mdp: this.mdpControl,
      email: this.emailControl,
    });
    this.connexionForm = new FormGroup({
      nomUtil: this.nomUtilControl,
      motPasse: this.motPasseControl
    })
  }

  signIn(): void {
    this.containerStyle = "container";
  }

  signUp(): void {
    this.containerStyle = "container right-panel-active";
  }

  valider(): void {

    let pwdmd5: string;
    let unUt: Utilisateur;

    unUt = new Utilisateur();
    unUt.motPasse = this.motPasseControl.value;
    unUt.nomUtil = this.nomUtilControl.value;
    this.unCS.getLogin(unUt).subscribe(
      reponse  => {
        window.localStorage.setItem("user", reponse.email);
        window.localStorage.setItem("role", reponse.role);

        this.router.navigate(['/welcome']);

      },
      err => {
        this.errorMessage = err.error.message;
        console.log("Erreur");
        alert('Erreur d\'appel!' + this.errorMessage);
      }
    );
  }

  inscription(): void {

    let pwdmd5: string;
    let unUt: Utilisateur;

    unUt = new Utilisateur();
    unUt.email = this.emailControl.value;
    unUt.forname = this.nomControl.value;
    unUt.surname = this.prenomControl.value;
    unUt.mdp = this.mdpControl.value;
    this.unCS.inscription(unUt).subscribe(
      reponse  => {
        alert('Inscription réussie !!!');
        this.router.navigate(['/welcome']);

      },
      err => {
        this.errorMessage = err.error.message;
        console.log("Erreur");
        alert('Erreur d\'appel!' + this.errorMessage);
      }
    );
  }



}
