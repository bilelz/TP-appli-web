import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { RouterModule, Routes } from '@angular/router';
import { MeteoDetailComponent } from './meteo-detail/meteo-detail.component';
import {MeteoService} from './services/meteo.service';
//import { ServicesComponent } from './services/services.component';


const appRoutes: Routes = [
    { 
      path: 'meteo/:name',  // la page  affichant la météo prendra comme paramètre 'name'
      component: MeteoDetailComponent 
    }, // Ce component fera l'appel AJAX et afficher les données reçues par openWeatherMap
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
    MeteoDetailComponent,
    //ServicesComponent
   
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]

})



export class AppModule { }

