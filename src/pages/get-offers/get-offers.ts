import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-get-offers',
  templateUrl: 'get-offers.html',
})
export class GetOffersPage {

  offer = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetOffersPage');
  }

  getOffer() {
    console.log(this.offer);

    this.navCtrl.pop();
  }

}
