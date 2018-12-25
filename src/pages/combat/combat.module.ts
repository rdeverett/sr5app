import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CombatPage } from './combat';

@NgModule({
  declarations: [
    CombatPage,
  ],
  imports: [
    IonicPageModule.forChild(CombatPage),
  ],
})
export class CombatPageModule {}
