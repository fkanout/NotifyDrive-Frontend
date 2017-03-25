import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { MainPage } from '../main/main'
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: Auth) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(email, password){
    this.authProvider.register(email, password).subscribe(
      registred => this.navCtrl.setRoot(MainPage),
      err=> console.log(err),
      ()=> console.log('Registaring done')
    )
    
  }

}
