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
    storage.ready()
    .then(() => {
      storage.get('token')
      .then(token => this.token = token)
      .catch(err => console.log('there is no token to init'))})
    .catch(err => console.log(err));
  }

  saveToken (value: string): Promise<string> {
    return this.storage.set('token', value)
    .then(token => this.token = token)
    .catch(err=> console.log(err))
  }
  getToken = () => this.token;

  getTokenFirstTime = () => this.storage.get('token');

  removeTokenToSignout = () => {
    console.log('Every thing is cleaned');
    this.token = null;
    this.storage.clear();
  }
}
