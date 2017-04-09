import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PAGES } from'./pages';
import { PROVIDERS } from './providers';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation'
import { Push } from '@ionic-native/push';
import { Device } from '@ionic-native/device';


@NgModule({
  declarations: [
   MyApp,
   PAGES
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    BrowserModule,
    HttpModule

  ],  
  bootstrap: [IonicApp],
  entryComponents:[
    MyApp,
    PAGES
  ],
  providers: [
    Geolocation,
    Device,
    Push,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PROVIDERS
  ]
})
export class AppModule {}
