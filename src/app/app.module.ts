import { NgModule, ErrorHandler } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { TypePage } from '../pages/type/type';
import { ChooseMsgPage } from '../pages/choose-msg/choose-msg';
import { MsgListPage } from '../pages/msg-list/msg-list';
import { RegisterPage } from '../pages/register/register';
import { MorePage } from '../pages/more/more';
import { CarsPage } from '../pages/cars/cars';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ParametersPage } from '../pages/parameters/parameters';
import { FaqPage } from '../pages/faq/faq';

import { Auth } from '../providers/auth';
import { User } from '../providers/user';
import { LocalStorage } from '../providers/storage';

import { NDErrorHandler } from '../providers/error-handler';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    TypePage,
    ChooseMsgPage,
    MsgListPage,
    RegisterPage,
    MorePage,
    CarsPage,
    NotificationsPage,
    ParametersPage,
    FaqPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    TypePage,
    ChooseMsgPage,
    MsgListPage,
    RegisterPage,
    MorePage,
    CarsPage,
    NotificationsPage,
    ParametersPage,
    FaqPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Auth, NDErrorHandler, User, LocalStorage]
})
export class AppModule {}
