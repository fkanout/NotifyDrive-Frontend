import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the MsgList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-msg-list',
  templateUrl: 'msg-list.html'
})
export class MsgListPage {
private msgList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
      this.msgList = [
        "My car is stacked by yours",
        "Your car is being robbed",
        "You forgot you car's lighit on",
        "You forgot you pet in your car",
        "Votre voiture a blocké la mienne",
        "Vous avez oublié vorre chien dans votre voiture et il est pas bien ",
        "Meowth",
        "Persian",
        "Psyduck",
        "Arcanine",
        "Poliwrath",
        "Machoke"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsgListPage');
  }
  itemSelected(msg){
    this.viewCtrl.dismiss(msg);
  }
}
