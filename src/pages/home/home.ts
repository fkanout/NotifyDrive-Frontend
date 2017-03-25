import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: Auth) {

  }
  login(email, password){
    this.auth.login(email, password)
        .subscribe(
            logged => this.navCtrl.setRoot(MainPage),
            err => console.log('Error'),
            () => console.log('Authentication Complete')
          );

  }
}
