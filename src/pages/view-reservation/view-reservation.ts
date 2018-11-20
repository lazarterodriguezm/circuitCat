import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CreateReservationPage } from '../create-reservation/create-reservation';

import { StorageProvider } from './../../providers/storage/storage';

import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage()
@Component({
  selector: 'page-view-reservation',
  templateUrl: 'view-reservation.html',
})
export class ViewReservationPage {

  reservation = {nombre: "", apellidos: "", telefono: "", fecha: "", comensales: "", dietas: "", uuid: ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider, private toastCtrl: ToastController) {
    this.reservation = navParams.get('reservation');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewReservationPage');
  }

  deleteReservation() {
    this.storageProvider.deleteInfoFromDatabase('reservasUsuarios/' + this.reservation.uuid, this.reservation).then(() => {
      let toast = this.toastCtrl.create({
        message: '¡Reserva borrada!',
        duration: 3000
      });

      toast.present();
    });

    this.storageProvider.deleteInfoFromDatabase('reservasAdministracion/' + this.reservation.fecha, this.reservation).then(() => {
      console.log('Reserva de administración borrada.');
    });
  }

  duplicateReservation() {
    this.navCtrl.push(CreateReservationPage, this.reservation);
  }
}
