import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from './../../providers/storage/storage';

import { ToastController } from 'ionic-angular/components/toast/toast-controller';

import { Device } from '@ionic-native/device';

@IonicPage()
@Component({
  selector: 'page-get-offers',
  templateUrl: 'get-offers.html',
})
export class GetOffersPage {

  offer = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider, private toastCtrl: ToastController, private device: Device) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetOffersPage');
  }

  getOffer() {
    this.storageProvider.storeInfoToDatabase('ofertas/' + this.device.uuid, this.offer).then(() => {
      let toast = this.toastCtrl.create({
        message: 'New Offer Send!',
        duration: 3000
      });
      toast.present();
    });

    this.navCtrl.pop();
  }

}
