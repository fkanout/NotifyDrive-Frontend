import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LocalStorage } from '../../providers/storage';
import { User } from '../../providers/user';

import { HomePage } from '../home/home';
/*
  Generated class for the Signout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: User,
    private sotrageProvider: LocalStorage
    
    ) {}

  ionViewDidLoad() {
    this.sotrageProvider.removeTokenToSignout()
    // this.userProvider.removeToken();
    this.navCtrl.setRoot(HomePage);

  }

}
