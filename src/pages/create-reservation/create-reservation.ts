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

  options = { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: '2-digit' };

  reservation = {nombre: "", apellidos: "", telefono: "", fecha: "", hora: "", comensales: "", dietas: "", uuid: ""}

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider, private toastCtrl: ToastController, private device: Device, private datePicker: DatePicker) {
    this.reservation.fecha = (new Date).toLocaleDateString('es-ES', this.options);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateReservationPage');
  }

  showDatePicker() {
    this.datePicker.show({
      mode: 'datetime',
      date: new Date,
      minDate: (new Date).setDate((new Date).getDate() - 0),
      maxDate: (new Date).setDate((new Date).getDate() + 90),
      titleText: "Fecha",
      okText: "Aceptar",
      cancelText: "Cancelar",
      todayText: "",
      nowText: "",
      is24Hour: true,
      androidTheme: 5,
      allowOldDates: true,
      allowFutureDates: true,
      doneButtonLabel: "Aceptar",
      doneButtonColor: "#e61414",
      cancelButtonLabel: "Cancelar",
      cancelButtonColor: "#bf1111",
      x: 0,
      y: 0,
      minuteInterval: 30,
      popoverArrowDirection: "any",
      locale: "es_ES"
    }).then(
      date => {
        this.reservation.fecha = (new Date(Math.round(date.getTime() / (1000 * 60 * 30)) * (1000 * 60 * 30))).toLocaleDateString('es-ES', this.options);
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  pushChooseMenuPage() {
    this.navCtrl.push(ChooseMenuPage);
  }

  createReservation() {
    this.reservation.uuid = this.device.uuid;

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
