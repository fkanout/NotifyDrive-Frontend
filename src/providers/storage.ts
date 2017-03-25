import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the Storage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocalStorage {
  public token;

  constructor(public http: Http, public storage: Storage) {
     this.storage.ready().then(() => {
       this.storage.get('token').then(token => this.token = token)
      });
  }

  saveToken = (value) => this.storage.set('token', value).then((token => this.token = token));
  getToken = () => this.token;
}
