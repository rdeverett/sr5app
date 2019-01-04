import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { CharacterService } from '../../providers/characterSerivce/characterService';

/**
 * Generated class for the CharacterPortraitSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-portrait-selection',
  templateUrl: 'character-portrait-selection.html',
  providers: [DataProvider, CharacterService]
})
export class CharacterPortraitSelectionPage {

  public character = null;
  public characterPortait = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, private characterService: CharacterService) {
    this.character = this.characterService.getCharacterPortrait();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPortraitSelectionPage');
  }

  changeCharacterPortrait(){
    
  }

}
