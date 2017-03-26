import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MsgListPage } from '../msg-list/msg-list';
import { User } from '../../providers/user';
import { GeolocationNative } from '../../providers/geolocation';
/*
  Generated class for the ChooseMsg page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-choose-msg',
  templateUrl: 'choose-msg.html'
})
export class ChooseMsgPage {
  private car: any;
  private selectedMsg: any;
  private readyToSendNotification: boolean = false;

  constructor(
    public geo: GeolocationNative,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    private userProvider: User) {

   this.car = this.navParams.data;  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseMsgPage');
  }
  showMsgsPicker(){
    let profileModal = this.modalCtrl.create(MsgListPage,{}, { showBackdrop: true, enableBackdropDismiss: true });
     profileModal.onDidDismiss(data => {
 
       if (data && this.car.plate){
         this.selectedMsg = data;
        this.readyToSendNotification= true
       }
   });
    profileModal.present();


  } 
  sendNotifyDriver(){
    if (this.car._id && this.car.owner && this.selectedMsg){
      this.geo.getGeolocation().then(resp=>{
         this.userProvider.notifyDriver(this.car._id, this.car.owner, this.selectedMsg, resp.coords.latitude, resp.coords.longitude).subscribe(
            notificationSent => console.log(notificationSent),
            err => console.log('Error'),
            () => console.log('Authentication Complete')
          );
      })
       
    }

  }
  isInvalid = () => this.readyToSendNotification;

}