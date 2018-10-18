import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CreateReservationPage } from '../create-reservation/create-reservation';
import { ViewReservationPage } from '../view-reservation/view-reservation';

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

  items = [
    {
      "name" : "Nombre 1",
      "date" : "Fecha 1",
      "diners" : "Comensales 1",
      "preferences" : "Preferencias 1"
    },
    {
      "name" : "Nombre 2",
      "date" : "Fecha 2",
      "diners" : "Comensales 2",
      "preferences" : "Preferencias 2"
    },
    {
      "name" : "Nombre 3",
      "date" : "Fecha 3",
      "diners" : "Comensales 3",
      "preferences" : "Preferencias 3"
    }
  ];

  pushViewReservationPage(item: any) {
    this.navCtrl.push(ViewReservationPage, {item : item});
  }

  pushCreateReservationPage() {
    this.navCtrl.push(CreateReservationPage);
  }

}
