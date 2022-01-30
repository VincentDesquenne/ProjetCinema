import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FilmComponent } from './component/film/film.component';
import { LoginComponent } from './component/login/login.component';
import {NgRatingBarModule} from 'ng-rating-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ViewFilmComponent } from './component/view-film/view-film.component';
import { ActeurComponent } from './component/acteur/acteur.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FilmService} from './services/film.service';
import {ActeurService} from './services/acteur.service';
import {PersonnageService} from './services/personnage.service';
import {RealisateurService} from './services/realisateur.service';
import {CategorieService} from './services/categorie.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { AjoutActeurComponent } from './component/ajout-acteur/ajout-acteur.component';
import { AjoutFilmComponent } from './component/ajout-film/ajout-film.component';
import { AjoutPersonnageComponent } from './component/ajout-personnage/ajout-personnage.component';
import { AjoutCategorieComponent } from './component/ajout-categorie/ajout-categorie.component';
import {ConnexionService} from './services/connexion.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ViewActeurComponent } from './component/view-acteur/view-acteur.component';
import {MatSelectModule} from '@angular/material/select';
import { AjoutRealisateurComponent } from './component/ajout-realisateur/ajout-realisateur.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FilmComponent,
    LoginComponent,
    WelcomeComponent,
    ViewFilmComponent,
    ActeurComponent,
    AjoutActeurComponent,
    AjoutFilmComponent,
    AjoutPersonnageComponent,
    AjoutCategorieComponent,
    ViewActeurComponent,
    AjoutRealisateurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgRatingBarModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [FilmService, ActeurService, PersonnageService, RealisateurService, CategorieService, ConnexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
