import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LocalStorage } from '../../providers/storage';
import { LoadingController } from 'ionic-angular';

import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: Auth, private storageProvider: LocalStorage, private loadingCtrl: LoadingController ) {
  

  }
   ionViewDidLoad(){
    let loader = this.loadingCtrl.create({
      content: "Authentication...",
    });
    loader.present();

 
     this.storageProvider.getTokenFirstTime().then(token=>{
        this.auth.checkTokenToLogin(token).subscribe(
          validToken=> {
            this.navCtrl.setRoot(MainPage),
            loader.dismiss();

          },
          err=> {
            loader.dismiss();
            console.log(err)
          }
        )
      
    })

  }
  login(email, password){
    this.auth.login(email, password)
        .subscribe(
            logged => this.navCtrl.setRoot(MainPage),
            err => console.log('Error'),
            () => console.log('Authentication Complete')
          );

  }
   register(email, password){
    this.auth.register(email, password)
        .subscribe(
            registred => this.navCtrl.setRoot(MainPage),
            err => console.log('Error'),
            () => console.log('Registeration Complete')
          );

  }
}
