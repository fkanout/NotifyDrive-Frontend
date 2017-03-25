import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user'
import { ChooseMsgPage } from '../choose-msg/choose-msg'
/*
  Generated class for the Type page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-type',
  templateUrl: 'type.html'
})
export class TypePage {
private chooseMsgPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: User) {
    this.chooseMsgPage = ChooseMsgPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypePage');
  }
  search(plate){
    if (plate.value !== ''){
      this.userProvider.searchCarPlate(plate.value.toLowerCase()).subscribe(
          car=> this.navCtrl.push(ChooseMsgPage,car),
          err=> console.log(err),
          ()=> console.log('Done searching car plate !'))
    }
  }

}
