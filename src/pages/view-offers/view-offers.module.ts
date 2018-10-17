import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewOffersPage } from './view-offers';

@NgModule({
  declarations: [
    ViewOffersPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewOffersPage),
  ],
})
export class ViewOffersPageModule {}
