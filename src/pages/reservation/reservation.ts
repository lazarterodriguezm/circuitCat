import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CreateReservationPage } from '../create-reservation/create-reservation';
import { ViewReservationPage } from '../view-reservation/view-reservation';

import { StorageProvider } from './../../providers/storage/storage';

import { Observable } from 'rxjs/Observable';

import { Device } from '@ionic-native/device';

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {

  reservations: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider, private device: Device) {
    this.reservations = this.storageProvider.getList('reservas/' + this.device.uuid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

  pushCreateReservationPage() {
    this.navCtrl.push(CreateReservationPage);
  }

  pushViewReservationPage(reservation: any) {
    this.navCtrl.push(ViewReservationPage, {reservation : reservation});
  }

  deleteReservation(reservation: any) {
    this.storageProvider.deleteInfoFromDatabase('reservas/' + this.device.uuid, reservation);
  }
}
