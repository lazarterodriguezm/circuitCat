import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewOffersPage } from '../view-offers/view-offers';
import { GetOffersPage } from '../get-offers/get-offers';

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }

  pushViewOffersPage() {
    this.navCtrl.push(ViewOffersPage);
  }

  pushGetOffersPage() {
    this.navCtrl.push(GetOffersPage);
  }

}
