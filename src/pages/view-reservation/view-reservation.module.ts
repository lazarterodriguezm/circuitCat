import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewReservationPage } from './view-reservation';

@NgModule({
  declarations: [
    ViewReservationPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewReservationPage),
  ],
})
export class ViewReservationPageModule {}
