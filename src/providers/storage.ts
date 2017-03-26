import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the Storage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocalStorage {
  constructor (public storage: Storage) {
  }

  saveToken = (value) => this.storage.set('token', value);
  getToken = () => this.storage.get('token');
  removeTokenToSignout = () => this.storage.clear();
  
}
