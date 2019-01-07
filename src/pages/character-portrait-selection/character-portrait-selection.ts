import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
  providers: [CharacterService]
})
export class CharacterPortraitSelectionPage {

  public character = [];
  public characterPortrait = null;
  public currentCharacterPortrait = null;
  public i = 0;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private characterService: CharacterService) {
    //Acquires the whole array of character portraits

    this.character = this.characterService.getCharacterPortrait(); 

    for(let i = 0; i < this.character.length; i++)
    {
      this.i++;
      console.log(this.character[i]);
    }
    //Passes through currentCharacterPortrait from info.ts
    this.currentCharacterPortrait = this.navParams.get('currentCharacterPortrait');
  }

  makeMainPortrait(){    
    this.close();
  }

  close(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPortraitSelectionPage');
  }

  changeCharacterPortrait(){
    
  }

}
