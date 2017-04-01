import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the Geolocation provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GeolocationNative {
 latitude = null;
 longitude = null;

 constructor(private geolocation: Geolocation) {

   geolocation.watchPosition()
   .filter((p) => p.coords !== undefined)
   .subscribe(pos => {
     this.latitude = pos.coords.latitude;
     this.longitude = pos.coords.longitude;
      });

 }

  getGeolocation () {
    return  { latitude : this.latitude, longitude: this.longitude }
  } 
  


}
