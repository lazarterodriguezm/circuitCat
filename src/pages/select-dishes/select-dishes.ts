import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-select-dishes',
  templateUrl: 'select-dishes.html',
})
export class SelectDishesPage {

  dishes = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectDishesPage');
  }

  sendDishes() {
    console.log(this.dishes);

    this.navCtrl.pop();
  }
}
