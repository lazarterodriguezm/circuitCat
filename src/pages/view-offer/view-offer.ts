import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-offer',
  templateUrl: 'view-offer.html',
})
export class ViewOfferPage {

  offer = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.offer = navParams.get('offer');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewOfferPage');
  }
}
