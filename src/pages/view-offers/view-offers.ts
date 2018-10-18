import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-offers',
  templateUrl: 'view-offers.html',
})
export class ViewOffersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewOffersPage');
  }

  items = [
    {
      "nombre" : "Nombre 1",
      "fecha" : "Fecha 1"
    },
    {
      "nombre" : "Nombre 2",
      "fecha" : "Fecha 2"
    },
    {
      "nombre" : "Nombre 3",
      "fecha" : "Fecha 3"
    }];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
