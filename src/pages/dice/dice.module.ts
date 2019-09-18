import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DicePage } from './dice';

@NgModule({
  declarations: [
    DicePage,
  ],
  imports: [
    IonicPageModule.forChild(DicePage),
  ],
})
export class DicePageModule {}
