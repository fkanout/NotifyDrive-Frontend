import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { HomePage } from '../pages/home/home';
import { LocalStorage } from '../providers/storage';
import { GeolocationNative } from '../providers/geolocation';
import { Auth } from '../providers/auth';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  public notificationDeviceToken;
  

  constructor(
    private push: Push,  
    public platform: Platform, 
    public authProvider: Auth,
    public alertCtrl: AlertController, statusBar: StatusBar, splashScreen: SplashScreen, storageProvider: LocalStorage, geoLocationNative: GeolocationNative) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
     this.initPushNotification();
    });
   

  }
  initPushNotification(){
     const options: PushOptions = {
       android: {
       senderID: '651667122744'
      },
       ios: {
       alert: 'true',
       badge: true,
       sound: 'true'
      },
       windows: {}
      };
      
      const pushObject: PushObject = this.push.init(options);


      pushObject.on('notification').subscribe(notification => alert('Received a notification '+notification ));

      pushObject.on('registration').subscribe(registration => this.registerToken(registration))

      pushObject.on('error').subscribe(error => alert('Error with Push plugin'+error));
  
}
  registerToken(registration){
    console.log('registerToken');
        this.authProvider.setNotificationDeviceToken(registration.registrationId);
  } 


  

}
