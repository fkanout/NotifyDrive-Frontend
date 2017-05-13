import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChooseMsgPage } from '../choose-msg/choose-msg';
import { User } from '../../providers/user';
/*
  Generated class for the WhatSendToUser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-what-send-to-user',
  templateUrl: 'what-send-to-user.html',
  styleUrls: ['/pages/what-send-to-user/font-awesome.min.css']
})
export class WhatSendToUserPage {
  private car;
  private chooseMsgPage = ChooseMsgPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public userProvider: User) {
       this.car = this.navParams.data;  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatSendToUserPage');
  }

  gotToChooseMsg(){
    this.navCtrl.push(ChooseMsgPage, this.car);
  }

  evaluateDriver(evaluation){
    this.userProvider.evaluateDriver(this.car._id, this.car.ownerId, evaluation).subscribe(
      (evaluated =>{
        if (evaluated.nModified)
          alert('Evaluated !');
        else
          alert('You have already evaluated this driver');
      } ),
      (err=> console.log(err))
    )

  }

}
