import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiowareDetailPage } from './bioware-detail';

@NgModule({
  declarations: [
    BiowareDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BiowareDetailPage),
  ],
})
export class BiowareDetailPageModule {}
