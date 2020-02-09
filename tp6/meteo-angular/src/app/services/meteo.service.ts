
import { MeteoItem } from '../meteoItem';






export class MeteoService {

  constructor() { }


  getMeteo(name: string): Promise<any> {
    console.log('from service', name);

    let m = new MeteoItem();

    return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&units=metric&lang=fr&appid=8e21ca097f8593edf70ddc460b4b3840')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);

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

    getFiveDaysForecast(name: string): Promise<any>{
      console.log('forecast from service', name);
  

      return fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ name +'&units=metric&lang=fr&appid=8e21ca097f8593edf70ddc460b4b3840')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        // test du code retour
        // 200 = OK
        // 404 = city not found
        if (data.cod == 200) {

          return Promise.resolve(data);
        } else {
       
          console.error('Forecast introuvable pour ' + name
            + ' (' + data.message + ')');

          return Promise.reject('forecast introuvable pour ' + name
            + ' (' + data.message + ')');
        }

      });
    }
  }
