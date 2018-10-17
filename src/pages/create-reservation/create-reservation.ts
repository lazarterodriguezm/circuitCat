import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-reservation',
  templateUrl: 'create-reservation.html',
})
export class CreateReservationPage {

  reservation = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateReservationPage');
  }

  createReservation() {
    console.log(this.reservation);

    this.navCtrl.pop();
  }

}
