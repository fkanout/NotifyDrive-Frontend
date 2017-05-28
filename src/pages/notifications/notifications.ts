import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotificationReceivedPage } from '../notification-received/notification-received';
import { NotificationSentPage } from '../notification-sent/notification-sent';

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
  public notificationReceivedPage;
  public notificationSentPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.notificationReceivedPage = NotificationReceivedPage;
  this.notificationSentPage = NotificationSentPage;
  

  }

  ionViewDidLoad() {

  }

  getNotifications(){
   

  }

}
