import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from './../../providers/storage/storage';

import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Observable } from 'rxjs/Observable';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-create-reservation',
  templateUrl: 'create-reservation.html',
})
export class CreateReservationPage {

  reservation = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider, private alertCtrl: AlertController, private toastCtrl: ToastController, private inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateReservationPage');
  }

  createReservation() {
    console.log(this.reservation);

    this.storageProvider.storeInfoToDatabase('reservas', this.reservation).then(() => {
      let toast = this.toastCtrl.create({
        message: 'New File added!',
        duration: 3000
      });

      toast.present();
    });

    this.navCtrl.pop();
  }
}
