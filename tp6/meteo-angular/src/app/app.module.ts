import { FormsModule } from '@angular/forms'; // <--  Ajouter la référence ici
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';

import { RouterModule, Routes } from '@angular/router';
import { MeteoDetailComponent } from './meteo-detail/meteo-detail.component';


const appRoutes: Routes = [
  { 
    path: 'meteo/:name',  // la page  affichant la météo prendra comme paramètre 'name'
    component: MeteoDetailComponent }, // Ce component fera l'appel AJAX et afficher les données reçues par openWeatherMap
  {
    path: '', // un chemin vide renverra vers '/'
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '', // la page principale utilisera le component suivant
    component: MeteoComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MeteoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //<-- Ajouter la référence ici aussi
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // autres imports ici
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }




