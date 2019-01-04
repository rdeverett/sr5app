import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { CharacterService } from '../../providers/characterSerivce/characterService';
import { DataProvider } from '../../providers/data/data';
import { CharacterPortraitSelectionPage } from '../character-portrait-selection/character-portrait-selection';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
  providers: [DataProvider, CharacterService]
})
export class InfoPage {

  public data = null;
  public character = null;
  public showingCharacter = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, private characterService: CharacterService, public popoverControl: PopoverController) {
    this.data = this.dataProvider.getCharacter();
    this.character = this.characterService.getCharacterPortrait();
    this.showingCharacter = this.character.characterPortrait.shadowrunOrkMaleShortBlackHair;
  }

  changePortrait(myEvent){
    const popover = this.popoverControl.create(CharacterPortraitSelectionPage);
    popover.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
