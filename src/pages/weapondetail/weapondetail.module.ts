import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeapondetailPage } from './weapondetail';

@NgModule({
  declarations: [
    WeapondetailPage,
  ],
  imports: [
    IonicPageModule.forChild(WeapondetailPage),
  ],
})
export class WeapondetailPageModule {}
