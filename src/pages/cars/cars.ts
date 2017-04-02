import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user';
import { Observable } from "rxjs/Observable";
import { AddCarPage } from '../add-car/add-car';
/*
  Generated class for the Cars page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cars',
  templateUrl: 'cars.html'
})
export class CarsPage {
  private carsList: Observable<any>;
  public addCarPage = AddCarPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: User) {}

  ionViewDidLoad() {
   this.carsList = this.userProvider.getMyCars();
    
  }

}
