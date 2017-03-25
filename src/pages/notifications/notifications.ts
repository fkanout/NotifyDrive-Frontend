import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user';
import { Observable } from "rxjs/Observable";
/*
  Generated class for the Notifications page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {
  private notificationsList: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: User) {}

  ionViewDidLoad() {
    this.notificationsList =  this.userProvider.getNotifications()

  }

  getNotifications(){
   

  }

}
