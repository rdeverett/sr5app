import { Component } from '@angular/core';
import { Events } from 'ionic-angular'
import { IonicPage, NavController, NavParams} from 'ionic-angular';
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
export class InfoPage{

  public data = null;
  public characterPortraits = [];
  public currentCharacterPortrait = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, public event: Events) {
    //Character Data
    this.data = this.dataProvider.getCharacter();

    //Gets array of character portraits
    this.characterPortraits = this.dataProvider.getCharacterPortraits();

    //Sets characterPortrait based off of index
    this.currentCharacterPortrait = this.characterPortraits[0];

    //Grabs characterPortraitIndex from CharacterPortraitSelectionPage.ts
    this.event.subscribe('characterPortraitIndex', characterPortraitIndex=>{
      this.currentCharacterPortrait = this.characterPortraits[characterPortraitIndex];
      this.dataProvider.characterPortraitIndex = characterPortraitIndex;
    })
  }

  openCharacterPortraitSelectionPage(){  
    this.navCtrl.push(CharacterPortraitSelectionPage);
  }

  ionViewDidEnter(){
    console.log(this.dataProvider.characterPortraitIndex);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  
}
