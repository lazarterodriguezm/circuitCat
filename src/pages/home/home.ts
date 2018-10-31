import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from './../../providers/storage/storage';

import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Observable } from 'rxjs/Observable';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  files: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider, private alertCtrl: AlertController, private toastCtrl: ToastController, private inAppBrowser: InAppBrowser) {
    this.files = this.storageProvider.getList('files');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  addFile() {
    let inputAlert = this.alertCtrl.create({
      title: 'Store new information',
      inputs: [
        {
          name: 'info',
          placeholder: 'Lorem ipsum dolor...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Store',
          handler: data => {
            this.uploadInformation(data.info);
          }
        }
      ]
    });
    inputAlert.present();
  }
 
  uploadInformation(text) {
  /*
    let upload = this.storageProvider.uploadToStorage('files', text);
 
    // Perhaps this syntax might change, it's no error here!
    upload.then().then(res => {
      this.storageProvider.storeInfoToDatabase('files', res.metadata).then(() => {
        let toast = this.toastCtrl.create({
          message: 'New File added!',
          duration: 3000
        });
        toast.present();
      });
    });
    */
  }
 
  deleteFile(file) {
    this.storageProvider.deleteFile('files', file).subscribe(() => {
      let toast = this.toastCtrl.create({
        message: 'File removed!',
        duration: 3000
      });
      toast.present();
    });
  }
 
  viewFile(url) {
    this.inAppBrowser.create(url);
  }
}
