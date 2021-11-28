import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {WelcomeComponent} from './component/welcome/welcome.component';
import {LoginComponent} from './component/login/login.component';
import {AccueilComponent} from './component/accueil/accueil.component';



const routes : Routes =  [

  { path: '', redirectTo : '/welcome', pathMatch: 'full'  },
  { path: 'connexion', component: LoginComponent },
  { path: 'films', component: AccueilComponent },
  { path: 'welcome', component: WelcomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
