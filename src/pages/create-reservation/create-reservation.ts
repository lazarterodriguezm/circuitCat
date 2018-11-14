import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChooseMenuPage } from '../choose-menu/choose-menu';

import { StorageProvider } from './../../providers/storage/storage';

import { ToastController } from 'ionic-angular/components/toast/toast-controller';

import { Device } from '@ionic-native/device';

@IonicPage()
@Component({
  selector: 'page-create-reservation',
  templateUrl: 'create-reservation.html',
})
export class CreateReservationPage {

  reservation = {fecha:""}

  minDate: Date = new Date();
  maxDate: Date = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider, private toastCtrl: ToastController, private device: Device) {
    this.maxDate.setDate(this.maxDate.getDate() + 90);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateReservationPage');
  }

  pushChooseMenuPage() {
    this.navCtrl.push(ChooseMenuPage);
  }

  createReservation() {
    this.storageProvider.storeInfoToDatabase('reservasUsuarios/' + this.device.uuid, this.device.uuid + this.reservation.fecha, this.reservation).then(() => {
      let toast = this.toastCtrl.create({
        message: 'New File added!',
        duration: 3000
      });

      toast.present();
    });

    this.storageProvider.storeInfoToDatabase('reservasAdministracion/' + this.reservation.fecha, this.device.uuid + this.reservation.fecha, this.reservation).then(() => {
      let toast = this.toastCtrl.create({
        message: 'New File added!',
        duration: 3000
      });

      toast.present();
    });

    this.navCtrl.pop();
  }
}
