import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterService } from '../../app/characterService';

/**
 * Generated class for the GearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gear',
  templateUrl: 'gear.html',
  providers: [CharacterService]
})
export class GearPage {

  public data = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private characterService: CharacterService) {
    this.data = this.characterService.getCharacter();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GearPage');
  }

}
