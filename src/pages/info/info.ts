import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Events } from 'ionic-angular'
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  providers: [DataProvider]
})
export class InfoPage {

  public data = null;
  public characterPortraits = [];
  public currentCharacterPortrait = null;
  public characterPortaitIndex;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, public event: Events, public storage: Storage) {
    //Character Data
    this.data = this.dataProvider.getCharacter();

    //Gets array of character portraits
    this.characterPortraits = this.dataProvider.getCharacterPortraits();

    //Grabs characterPortraitIndex from CharacterPortraitSelectionPage.ts
    this.event.subscribe('characterPortraitIndex', characterPortraitIndex => {
      this.currentCharacterPortrait = this.characterPortraits[characterPortraitIndex];
    })

    //Initializes to last selection of character portrait
    this.storage.get('characterPortait').then((characterPortait) => {
      this.currentCharacterPortrait = this.characterPortraits[characterPortait];
      this.characterPortaitIndex = characterPortait;
    });
  }

  openCharacterPortraitSelectionPage() {
    this.navCtrl.push(CharacterPortraitSelectionPage);
  }

  ionViewDidEnter() {
  }

  ionViewDidLoad() {
  }
}
