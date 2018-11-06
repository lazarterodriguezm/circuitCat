import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from './../../providers/storage/storage';

import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  entrees: Observable<any[]>;
  mainCourses: Observable<any[]>;
  desserts: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider, private domSanitizer: DomSanitizer) {
    this.entrees = this.storageProvider.getListFromDatabase('menus/entrantes');
    this.mainCourses = this.storageProvider.getListFromDatabase('menus/platos principales');
    this.desserts = this.storageProvider.getListFromDatabase('menus/postres');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  getSlideStyle(image) {
    return this.domSanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
}
