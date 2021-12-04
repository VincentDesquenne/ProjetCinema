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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgRatingBarModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
