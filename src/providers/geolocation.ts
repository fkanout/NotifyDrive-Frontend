import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the Geolocation provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GeolocationNative {
 constructor(private geolocation: Geolocation) {
}

  getGeolocation(): Promise<any>{
    return this.geolocation.getCurrentPosition()
} 

}
