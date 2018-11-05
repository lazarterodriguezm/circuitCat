import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewOfferPage } from '../view-offer/view-offer';

import { StorageProvider } from './../../providers/storage/storage';

import { Observable } from 'rxjs/Observable';

import { Device } from '@ionic-native/device';

@IonicPage()
@Component({
  selector: 'page-view-offers',
  templateUrl: 'view-offers.html',
})
export class ViewOffersPage {

  offers: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider, private device: Device) {
    this.offers = this.storageProvider.getList('ofertas/' + this.device.uuid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewOffersPage');
  }

  pushViewOfferPage(offer: any) {
    this.navCtrl.push(ViewOfferPage, {offer : offer});
  }
}
