import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterPortraitSelectionPage } from './character-portrait-selection';

@NgModule({
  declarations: [
    CharacterPortraitSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterPortraitSelectionPage),
  ],
})
export class CharacterPortraitSelectionPageModule {}
