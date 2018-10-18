import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewOfferPage } from '../view-offer/view-offer';

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
      "code" : "Codigo 1",
      "name" : "Nombre 1",
      "date" : "Fecha 1"
    },
    {
      "code" : "Codigo 2",
      "name" : "Nombre 2",
      "date" : "Fecha 2",
    },
    {
      "code" : "Codigo 3",
      "name" : "Nombre 3",
      "date" : "Fecha 3",
    }
  ];

  pushViewOfferPage(item: any) {
    this.navCtrl.push(ViewOfferPage, {item : item});
  }

}
