import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Storage } from '@ionic/storage';
import { CONSTANT } from '../constant';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello Auth Provider');
      this.storage.ready().then(() => {
          console.log('storage is ready ');
      });
  }

 login (email, password) {
     let body = `email=${email}&password=${password}`;
     let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
     return this.http.post(`${CONSTANT.API_URL}/signin`, body, {headers: headers})
         .map(res => res.json().token && this.storage.set('token', res.json().token))
         .catch(this.handleError);
 }

 getToken (){
    return  this.storage.get('token').then(token=> {
     
     console.log(token);
    return token
    });
 } 

 register(email, password){
    let body = `email=${email}&password=${password}`;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(`${CONSTANT.API_URL}/signup`, body, {headers: headers})
        .map(res => res.json().token && this.storage.set('token', res.json().token))
        .catch(this.handleError);

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
