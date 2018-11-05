import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-reservation',
  templateUrl: 'view-reservation.html',
})
export class ViewReservationPage {

  reservation = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reservation = navParams.get('reservation');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewReservationPage');
  }
}
