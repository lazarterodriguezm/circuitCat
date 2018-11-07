import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectDishesPage } from './select-dishes';

@NgModule({
  declarations: [
    SelectDishesPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectDishesPage),
  ],
})
export class SelectDishesPageModule {}
