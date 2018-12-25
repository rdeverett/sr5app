import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeaponsPage } from './weapons';

@NgModule({
  declarations: [
    WeaponsPage,
  ],
  imports: [
    IonicPageModule.forChild(WeaponsPage),
  ],
})
export class WeaponsPageModule {}
