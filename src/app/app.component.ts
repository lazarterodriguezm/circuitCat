import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private push: Push) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pushCheckPermission();
      this.pushInitialize();
    });
  }

  // To check if we have push notifications permission
  pushCheckPermission() {
    this.push.hasPermission()
      .then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }
      });
  };

  // To initialize push notifications
  pushInitialize() {
    const options: PushOptions = {
      android: {
        senderID: '1028410392491',
        //icon: 'string',
        //iconColor: 'string',
        //topics: 'string',
        //messageKey: 'string',
        //titleKey: 'string',
        sound: true,
        vibrate: true,
        clearBadge: true,
        clearNotifications: true,
        forceShow: true
      },
      ios: {
        //fcmSandbox: true,
        //voip: true,
        //topics: '',
        //categories: '',
        alert: true,
        badge: true,
        sound: false,
        clearBadge: true
      },
      windows: {
      },
      browser: {
        //applicationServerKey: '',
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };

    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  };
}
