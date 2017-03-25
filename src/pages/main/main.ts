import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TypePage } from '../type/type';
import { MorePage } from '../more/more'
/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  private typePage;
  private morePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.typePage = TypePage;
     this.morePage = MorePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
