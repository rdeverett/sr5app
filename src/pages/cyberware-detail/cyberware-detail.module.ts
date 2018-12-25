import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CyberwareDetailPage } from './cyberware-detail';

@NgModule({
  declarations: [
    CyberwareDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CyberwareDetailPage),
  ],
})
export class CyberwareDetailPageModule {}
