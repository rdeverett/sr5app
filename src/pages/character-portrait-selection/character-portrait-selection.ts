import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Events } from "ionic-angular";
import { DataProvider } from '../../providers/data/data';

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
  providers: [DataProvider]
})
export class CharacterPortraitSelectionPage {

  public characterPortraits = [];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private dataProvider: DataProvider, public event: Events, public storage: Storage) {
    //Acquires the whole array of character portraits
    this.characterPortraits = this.dataProvider.getCharacterPortraits();
  }

  changeCharacterPortrait(characterPortraitIndex) {
    this.event.publish('characterPortraitIndex', characterPortraitIndex);
    this.storage.set('characterPortait', characterPortraitIndex);
    this.dataProvider.characterPortraitIndex = characterPortraitIndex;
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPortraitSelectionPage');
  }

}
