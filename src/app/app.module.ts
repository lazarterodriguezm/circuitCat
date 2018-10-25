import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { ReservationPage } from '../pages/reservation/reservation';
import { OffersPage } from '../pages/offers/offers';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';

import { CreateReservationPage } from '../pages/create-reservation/create-reservation';
import { ViewOffersPage } from '../pages/view-offers/view-offers';
import { GetOffersPage } from '../pages/get-offers/get-offers';
import { ViewReservationPage } from '../pages/view-reservation/view-reservation';
import { ViewOfferPage } from '../pages/view-offer/view-offer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Push, PushObject, PushOptions } from '@ionic-native/push';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ReservationPage,
    OffersPage,
    MapPage,
    TabsPage,
    CreateReservationPage,
    ViewOffersPage,
    GetOffersPage,
    ViewReservationPage,
    ViewOfferPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    ReservationPage,
    OffersPage,
    MapPage,
    TabsPage,
    CreateReservationPage,
    ViewOffersPage,
    GetOffersPage,
    ViewOfferPage,
    ViewReservationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Push,
    PushObject
  ]
})
export class AppModule {}
