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
        "Votre voiture a bloqué la mienne",
        "Votre voiture risque un cambriolage",
        "Vous avez oublié vos phares allumés",
        "Vous avez oublié votre chien et il fait très chaud",
        "Vous bloquez le passage piéton pour une personne en fauteuil roulant",
        "Vous avez oublié de verrouiller votre voiture"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsgListPage');
  }
  itemSelected(msg){
    this.viewCtrl.dismiss(msg);
  }
}
