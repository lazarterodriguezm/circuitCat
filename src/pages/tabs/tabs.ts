import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { ReservationPage } from '../reservation/reservation';
import { OffersPage } from '../offers/offers';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage
  menuRoot = MenuPage
  reservationRoot = ReservationPage
  offersRoot = OffersPage
  mapRoot = MapPage

  constructor(public navCtrl: NavController) {}
}
