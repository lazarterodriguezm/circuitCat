import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CreateReservationPage } from '../create-reservation/create-reservation';

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
      "nombre" : "Nombre 1",
      "fecha" : "Fecha 1",
      "comensales" : "Comensales 1",
      "preferencias": "Preferencias 1"
    },
    {
      "nombre" : "Nombre 2",
      "fecha" : "Fecha 2",
      "comensales" : "Comensales 2",
      "preferencias": "Preferencias 2"

    },
    {
      "nombre" : "Nombre 3",
      "fecha" : "Fecha 3",
      "comensales" : "Comensales 3",
      "preferencias": "Preferencias 3"
    }];



  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  pushCreateReservationPage() {
    this.navCtrl.push(CreateReservationPage);
  }

}
