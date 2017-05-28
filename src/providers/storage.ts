import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*

  Generated class for the Storage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocalStorage {
  public token: string = null;

  constructor (public storage: Storage) {
    console.log('init localStorage')
     storage.ready().then(() => {
       storage.get('token').then((token) => {
         console.log('Token in place', this.token);
         this.token = token;
       }).catch(err=> console.log('there is no token to init'));
     });
  }

  saveToken = (value) => this.storage.set('token', value).then(token=>{
    console.log('Token is saved');
    this.token = token;
  });

  getToken = () => this.token;

  getTokenFirstTime = () => this.storage.get('token');

  //  this.storage.get('token').then((token) => {
  //        console.log('Token in place first time', this.token);
  //        this.token = token;
  //      }).catch(err=> console.log('there is no token to init'));
  //  }
  

  removeTokenToSignout = () => {
    console.log('Every thing is cleaned');
    this.token = null;
    this.storage.clear();
  }
}
