import { Injectable } from '@angular/core';
import { MeteoItem } from '../meteoItem';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor() { }


  getMeteo(name: string): Promise<any> {
    console.log('from service', name);

    // tslint:disable-next-line:prefer-const
    let m = new MeteoItem();

    // tslint:disable-next-line:max-line-length
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&units=metric&lang=fr&appid=19ccb468d8d4384b3c6ce265ac8a98fc').then(function (response) {
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
