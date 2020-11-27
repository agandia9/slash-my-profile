import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgmService {

  lat;
  lng;
  constructor() { }

  getPosition(){
    if (navigator){
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });    

    } 
  }

  locate() {
    return this.getPosition().then((position: any) => {
      this.lng = +position.coords.longitude;
      this.lat = +position.coords.latitude;
        return {
          lat: this.lat,
          lng: this.lng
        }
    })
    .catch((err) => {
      console.error(err.message);
    });
  }

}
