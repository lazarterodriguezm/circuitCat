import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from './../../providers/storage/storage';

import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  covers: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider, private domSanitizer: DomSanitizer) {
    this.covers = this.storageProvider.getListFromDatabase('portadas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getSlideStyleHome(image) {
    return this.domSanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
}
