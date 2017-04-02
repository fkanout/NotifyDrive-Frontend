import { Observable } from 'rxjs/Rx';
import { User } from '../../providers/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the NotificationSent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notification-sent',
  templateUrl: 'notification-sent.html'
})
export class NotificationSentPage {

public sentNotificationsList: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: User) {}

  ionViewDidLoad() {
      this.sentNotificationsList =  this.userProvider.getSentNotifications()
    console.log('ionViewDidLoad NotificationSentPage');
  }

}
