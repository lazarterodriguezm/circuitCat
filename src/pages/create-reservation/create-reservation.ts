import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChooseMenuPage } from '../choose-menu/choose-menu';

import { StorageProvider } from './../../providers/storage/storage';

import { ToastController } from 'ionic-angular/components/toast/toast-controller';

import { Device } from '@ionic-native/device';
import { DatePicker } from '@ionic-native/date-picker';

@IonicPage()
@Component({
  selector: 'page-create-reservation',
  templateUrl: 'create-reservation.html',
})
export class CreateReservationPage {

  reservation = {hora: "", fecha: "", uuid: ""}
  options = { year: '2-digit', month: '2-digit', day: '2-digit' };

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider, private toastCtrl: ToastController, private device: Device, private datePicker: DatePicker) {
    this.reservation.fecha = (new Date).toLocaleDateString('es-ES', this.options);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateReservationPage');
  }

  showDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.reservation.fecha = date.toLocaleDateString('es-ES', this.options),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  pushChooseMenuPage() {
    this.navCtrl.push(ChooseMenuPage);
  }

  createReservation() {
    this.reservation.uuid = this.device.uuid;

    this.storageProvider.storeInfoToDatabase('reservasUsuarios/' + this.device.uuid, this.device.uuid + this.reservation.hora + this.reservation.fecha, this.reservation).then(() => {
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
