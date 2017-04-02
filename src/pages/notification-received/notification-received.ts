import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user';

/*
  Generated class for the NotificationReceived page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notification-received',
  templateUrl: 'notification-received.html'
})
export class NotificationReceivedPage {
  private notificationsList: Observable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams,  private userProvider: User) {}

  ionViewDidLoad() {
     this.notificationsList =  this.userProvider.getReceivedNotifications()

  }

}
