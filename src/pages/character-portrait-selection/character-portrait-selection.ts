import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Events } from "ionic-angular"; 
import { CharacterService } from '../../providers/characterSerivce/characterService';
import { DataProvider } from '../../providers/data/data';
import { InfoPage } from '../info/info';

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
  public currentCharacterPortrait = null;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private dataProvider: DataProvider, public event: Events) {
    //Acquires the whole array of character portraits
    this.characterPortraits = this.dataProvider.getCharacterPortraits();
  }

  changeCharacterPortrait(index){ 
    this.dataProvider.selectedCharacterPortraitIndex = index;
    console.log(this.dataProvider.selectedCharacterPortraitIndex);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPortraitSelectionPage');
  }

}
