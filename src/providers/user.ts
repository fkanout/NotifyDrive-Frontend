import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Auth } from './auth';
import { LocalStorage } from './storage'

import { CONSTANT } from '../constant' ;
import 'rxjs/add/operator/map';
import { NDErrorHandler } from "./error-handler";

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {
private token: any;
  constructor(public http: Http, public NDerrorHandler: NDErrorHandler, public authProvider: Auth, public storageProvider: LocalStorage) {
      this.token = this.authProvider.getToken();
   
  }

  searchCarPlate(plate){
    let body = `plate=${plate}`;
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token
    });
    return this.http.post(`${CONSTANT.API_URL}/car/search`, body,  {headers: headers})
    .map(res => res.json())
    .catch(this.NDerrorHandler.handleError);
  }

  notifyDriver(carId, ownerId, msgSelected, lat, log){
    console.log('lat', lat);
    console.log('log', log);
    
      let body = `carId=${carId}&ownerId=${ownerId}&msgSelected=${msgSelected}&lat=${lat}&log=${log}`;
      let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token
    });
   return this.http.post(`${CONSTANT.API_URL}/notifydriver`,body,{headers: headers})
    .map(res=> res.json())
    .catch(this.NDerrorHandler.handleError)

  }

  getNotifications (){
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':this.token
    });
   return this.http.get(`${CONSTANT.API_URL}/getreceivednotifications`, {headers: headers})
   .map(res=> res.json())
   .catch(this.NDerrorHandler.handleError)
  }

  getMyCars (){
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':this.token
    });
   return this.http.get(`${CONSTANT.API_URL}/car/getmycars`, {headers: headers})
   .map(res=> res.json())
   .catch(this.NDerrorHandler.handleError)
  }
}