import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> master
=======
import { StorageProvider } from './../../providers/storage/storage';

import { Observable } from 'rxjs/Observable';

>>>>>>> Marc
@IonicPage()
@Component({
  selector: 'page-select-dishes',
  templateUrl: 'select-dishes.html',
})
export class SelectDishesPage {

  dishes = {}

  entrees: Observable<any[]>;
  mainCourses: Observable<any[]>;
  desserts: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider) {
    this.entrees = this.storageProvider.getListFromDatabase('menus/entrantes');
    this.mainCourses = this.storageProvider.getListFromDatabase('menus/platos principales');
    this.desserts = this.storageProvider.getListFromDatabase('menus/postres');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectDishesPage');
  }

  sendDishes() {
    console.log(this.dishes);

    this.navCtrl.pop();
  }
<<<<<<< HEAD

=======
>>>>>>> master
}
