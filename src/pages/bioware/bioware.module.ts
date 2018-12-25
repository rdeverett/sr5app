import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiowarePage } from './bioware';

@NgModule({
  declarations: [
    BiowarePage,
  ],
  imports: [
    IonicPageModule.forChild(BiowarePage),
  ],
})
export class BiowarePageModule {}
