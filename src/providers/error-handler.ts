import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs";

import 'rxjs/add/operator/map';

/*
  Generated class for the ErrorHandler provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NDErrorHandler {

  constructor(public http: Http) {
    console.log('Hello ErrorHandler Provider');
  }
public handleError (error: any) {
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
