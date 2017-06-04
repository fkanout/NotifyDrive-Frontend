import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Auth } from './auth';
import { LocalStorage } from './storage'
import { CONSTANT } from '../constant' ;
import 'rxjs/add/operator/map';
import { NDErrorHandler } from "./error-handler";
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {
private token;
  constructor(
    public http: Http, public NDerrorHandler: NDErrorHandler,
    public authProvider: Auth,
    public storageProvider: LocalStorage,
    private transfer: Transfer) 
    {}

  searchCarPlate(plate){
    let body = `plate=${plate}`;
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.storageProvider.getToken()
    });
    return this.http.post(`${CONSTANT.API_URL}/car/search`, body,  {headers: headers})
    .map(res => res.json())
    .catch(this.NDerrorHandler.handleError);
  }

  getCarPlateViaCRM(image){
    
    // let body = `image=${image}`;
    // let headers = new Headers({
    //   'Content-Type': 'multipart/form-data',
    //   'Authorization': this.token
    // });
    let options1: FileUploadOptions = {
         httpMethod: 'POST',
         fileKey: 'file',
         fileName: 'name.jpg',
         mimeType: "image/jpeg",
         headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': this.token
        }
      }
      const fileTransfer: TransferObject = this.transfer.create();
      fileTransfer.upload(image, `${CONSTANT.API_URL}/imagecrm`, options1)
      .then((data) => {
        // success
        alert(data);
      }, (err) => {
        // error
        alert("error"+JSON.stringify(err));
      });

    // return this.http.post(`${CONSTANT.API_URL}/imagecrm`, body,  {headers: headers})
    // .map(res => res.json())
    // .catch(this.NDerrorHandler.handleError);

  }

  notifyDriver(carId, ownerId, msgSelected, lat, log){
    console.log('lat', lat);
    console.log('log', log);
    
      let body = `carId=${carId}&ownerId=${ownerId}&msgSelected=${msgSelected}&lat=${lat}&log=${log}`;
      let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.storageProvider.getToken()
    });
   return this.http.post(`${CONSTANT.API_URL}/notifydriver`,body,{headers: headers})
    .map(res=> res.json())
    .catch(this.NDerrorHandler.handleError)

  }

  evaluateDriver(carId, ownerId, evaluation){
      let body = `carId=${carId}&ownerId=${ownerId}&evaluation=${evaluation}`;
      let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.storageProvider.getToken()
    });
   return this.http.post(`${CONSTANT.API_URL}/evaluateDriver`,body,{headers: headers})
    .map(res=> res.json())
    .catch(this.NDerrorHandler.handleError)

  }

  getReceivedNotifications (){
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.storageProvider.getToken()
    });
   return this.http.get(`${CONSTANT.API_URL}/getreceivednotifications`, {headers: headers})
   .map(res=> res.json())
   .catch(this.NDerrorHandler.handleError)
  }

  getSentNotifications (){
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.storageProvider.getToken()
    });
   return this.http.get(`${CONSTANT.API_URL}/getsentnotifications`, {headers: headers})
   .map(res=> res.json())
   .catch(this.NDerrorHandler.handleError)
  }

  getMyCars (){
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.storageProvider.getToken()
    });
    return this.http.get(`${CONSTANT.API_URL}/car/getmycars`, {headers: headers})
    .map(res=> res.json())
    .catch(this.NDerrorHandler.handleError)
  }

  addCar(carPlate, carMark, carModel, carYear){
    let body = `plate=${carPlate}&mark=${carMark}&model=${carModel}&year=${carYear}`;
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':this.storageProvider.getToken()
    });
    return this.http.post(`${CONSTANT.API_URL}/car/add`, body, {headers: headers})
     .map(res=> res.json())
     .catch(this.NDerrorHandler.handleError)
  }
}