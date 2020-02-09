import { Injectable } from '@angular/core';
import { MeteoItem } from '../meteoItem';
//import { Observable } from 'rxjs/Observable';
//import { of } from 'rxjs/observable/of';
/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable({ providedIn: 'root' })
export class MeteoService {

  constructor() { }


  getMeteo(name: string): Promise<any> {
    console.log('from service', name);

    let m = new MeteoItem();

    return fetch('https://demo.bilelz.fr/owmap/?q=' + name + '&units=metric&lang=fr&appid=ad6c3f76aa016ba417579de2f72afbe1')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {

        // test du code retour
        // 200 = OK
        // 404 = city not found 
        if (json.cod === 200) {
          return Promise.resolve(json);
        } else {
          m.weather = json;

          console.error('Météo introuvable pour ' + name
            + ' (' + json.message + ')');

          return Promise.reject('Météo introuvable pour ' + name
          + ' (' + json.message + ')');
        }

      });

  }
}
