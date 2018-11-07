import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from './../../providers/storage/storage';

import { ToastController } from 'ionic-angular/components/toast/toast-controller';

import { Device } from '@ionic-native/device';

import { SelectDishesPage } from '../select-dishes/select-dishes';


@IonicPage()
@Component({
  selector: 'page-create-reservation',
  templateUrl: 'create-reservation.html',
})
export class CreateReservationPage {

  selectDishesPage=SelectDishesPage;
  reservation = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider, private toastCtrl: ToastController, private device: Device) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateReservationPage');
  }

  createReservation() {
    this.storageProvider.storeInfoToDatabase('reservas/' + this.device.uuid, this.reservation).then(() => {
      let toast = this.toastCtrl.create({
        message: 'New File added!',
        duration: 3000
      });

      toast.present();
    });

    this.navCtrl.pop();
  }
}
