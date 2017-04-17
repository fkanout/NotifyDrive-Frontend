import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CarsPage } from '../cars/cars';
import { NotificationsPage } from '../notifications/notifications';
import { ParametersPage } from '../parameters/parameters';
import { FaqPage } from '../faq/faq'
import { LogoutPage } from '../logout/logout'


/*
  Generated class for the More page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {
  private moreList;
  private carsPage = CarsPage; 
  private notificationsPage = NotificationsPage; 
  private parametersPage = ParametersPage;
  private faqPage = FaqPage; 
  private logoutPage = LogoutPage; 



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.moreList = [
            {
                id: 0,
                name: 'My Car',
                page: this.carsPage,
                icon: 'car'
            },
            {
                id: 1,
                name: 'Notifications',
                page: this.notificationsPage,
                icon: 'notifications'
            },
            {
                id: 2,
                name: 'Parameters',
                page: this.parametersPage,
                icon: 'cog'
            },
            {
                id: 3,
                name: 'FAQ',
                page: this.faqPage,
                icon: 'information-circle'
            },
             {
                id: 4,
                name: 'Historic',
                pagepage: '/history',
                icon: 'repeat'
            },
            {
                id: 6,
                name: 'Disconnect',
                page: this.logoutPage,
                icon:'log-out'
            }
        ];
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }
  logout(){
   
  }

}
