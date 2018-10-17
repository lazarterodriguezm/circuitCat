import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetOffersPage } from './get-offers';

@NgModule({
  declarations: [
    GetOffersPage,
  ],
  imports: [
    IonicPageModule.forChild(GetOffersPage),
  ],
})
export class GetOffersPageModule {}
