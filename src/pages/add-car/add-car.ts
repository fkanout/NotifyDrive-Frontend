import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user';

/*
  Generated class for the AddCar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-car',
  templateUrl: 'add-car.html'
})
export class AddCarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: User) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCarPage');
  }

  addCar(carPlate, carMark, carModel, carYear){
    this.userProvider.addCar(carPlate, carMark, carModel, carYear).subscribe(
      carAdded => console.log(carAdded),
      err=> console.log(err)
    )


  }

}
