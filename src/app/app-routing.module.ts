import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {WelcomeComponent} from './component/welcome/welcome.component';
import {LoginComponent} from './component/login/login.component';
import {FilmComponent} from './component/film/film.component';
import {ViewFilmComponent} from './component/view-film/view-film.component';
import {ActeurComponent} from './component/acteur/acteur.component';
import {AjoutActeurComponent} from './component/ajout-acteur/ajout-acteur.component';
import {AjoutFilmComponent} from './component/ajout-film/ajout-film.component';
import {AjoutPersonnageComponent} from './component/ajout-personnage/ajout-personnage.component';
import {AjoutCategorieComponent} from './component/ajout-categorie/ajout-categorie.component';
import {ViewActeurComponent} from './component/view-acteur/view-acteur.component';
import {AjoutRealisateurComponent} from './component/ajout-realisateur/ajout-realisateur.component';
import {ModifierActeurComponent} from './component/modifier-acteur/modifier-acteur.component';
import {ModifierFilmComponent} from './component/modifier-film/modifier-film.component';
import {ModifierRealisateurComponent} from './component/modifier-realisateur/modifier-realisateur.component';



const routes : Routes =  [

  { path: '', redirectTo : '/connexion', pathMatch: 'full'  },
  { path: 'connexion', component: LoginComponent },
  { path: 'films', component: FilmComponent },
  { path: 'film/:noFilm', component: ViewFilmComponent},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'acteurs', component: ActeurComponent },
  { path: 'acteur/:noAct', component: ViewActeurComponent},
  { path: 'ajout-acteur', component: AjoutActeurComponent},
  { path: 'ajout-film', component: AjoutFilmComponent},
  { path: 'ajout-perso', component: AjoutPersonnageComponent},
  { path: 'ajout-catego', component: AjoutCategorieComponent},
  { path: 'ajout-realisateur', component: AjoutRealisateurComponent},
  { path: 'modifier-acteur', component:ModifierActeurComponent},
  { path: 'modifier-film', component:ModifierFilmComponent},
  { path: 'modifier-realisateur', component:ModifierRealisateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
