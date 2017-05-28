import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { LocalStorage } from '../providers/storage';
import { CONSTANT } from '../constant';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import { Device } from '@ionic-native/device';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {
    public notificationDeviceToken;
    public deviceInfo;
    constructor(public http: Http, public storageProvider: LocalStorage, private device: Device) {}

    login (email, password) {
        let bodyJSON = {
            email,
            password,
            deviceToken: this.notificationDeviceToken,
            device: {
                cordova : this.device.cordova,
                model: this.device.model,
                platform :this.device.platform,
                uuid: this.device.uuid,
                version: this.device.version,
                manufacturer: this.device.manufacturer,
                isVirtual: this.device.isVirtual,
                serial:this.device.serial
            }
        }
        // let body = `email=${email}&password=${password}&notificationDeviceToken=${this.notificationDeviceToken}`;
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${CONSTANT.API_URL}/signin`, bodyJSON, {headers: headers})
            .map(res => {
                let token = res.json().token;
                this.storageProvider.saveToken(token) 
                return token;
            }).catch(this.handleError);
    }
        
    register(email, password){
        let body = `email=${email}&password=${password}&deviceToken=${this.notificationDeviceToken}`;
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this.http.post(`${CONSTANT.API_URL}/signup`, body, {headers: headers})
            .map(res => res.json().token && this.storageProvider.saveToken(res.json().token))
            .catch(this.handleError);

    }
     checkTokenToLogin(token){
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': token
    });
        return this.http.get(`${CONSTANT.API_URL}/checktoken`, {headers: headers})  
            .map(res => true)
            .catch(this.handleError);
    }
    setDeviceToken(token){
        this.notificationDeviceToken = token;
        console.log(" this.notificationDeviceToken",  this.notificationDeviceToken);
    }




  // loginOLD = (cred) => {
  //   return request({
  //     url: `${CONSTANT.API_URL}/signin`,
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     content: JSON.stringify({ email: cred.email, password: cred.password })
  //   }).then(response => {
  //     if (response && response.statusCode === 200 && response.content.toJSON()){
  //       appSettings.setString("accessToken",response.content.toJSON().token);
  //       return true;
  //     }
  //     return false;
  //   }).catch(err => false);
  // };

    private handleError (error: Response | any) {
        console.log(error);
        // In a real world app, you might use a remote logging infrastructure
        // let errMsg: string;
        // if (error instanceof Response) {
        //     const body = error.json() || '';
        //     const err = body.error || JSON.stringify(body);
        //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        // } else {
        //     errMsg = error.message ? error.message : error;
        // }
        // console.error(errMsg);
         return Observable.throw(error);
    }

}
