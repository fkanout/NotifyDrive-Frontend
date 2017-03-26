import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PAGES } from'./pages';
import { PROVIDERS } from './providers';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation'

@NgModule({
  declarations: [
   MyApp,
   PAGES
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],  
  bootstrap: [IonicApp],
  entryComponents:[
    MyApp,
    PAGES
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PROVIDERS
  ]
})
export class AppModule {}
