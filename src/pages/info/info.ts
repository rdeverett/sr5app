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
export class InfoPage{

  public index;
  public data = null;
  public characterPortraits = [];
  public currentCharacterPortrait = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    //Character Data
    this.data = this.dataProvider.getCharacter();
    //Gets array of character portraits
    this.characterPortraits = this.dataProvider.getCharacterPortraits();
    this.index = this.dataProvider.selectedCharacterPortraitIndex;
    this.currentCharacterPortrait = this.characterPortraits[this.index];
  }

  ionViewWillEnter(){
    this.index = this.dataProvider.selectedCharacterPortraitIndex; 
    console.log(this.index);
  }

  openCharacterPortraitSelectionPage(){  
    this.navCtrl.push(CharacterPortraitSelectionPage);
    // const popover = this.popoverControl.create(CharacterPortraitSelectionPage, {currentCharacterPortrait:this.currentCharacterPortrait}, {cssClass: 'custom-popover'});
    // popover.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  
}
