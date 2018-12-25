import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterService } from '../../app/characterService';
import { WeapondetailPage } from '../weapondetail/weapondetail';

/**
 * Generated class for the WeaponsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weapons',
  templateUrl: 'weapons.html',
  providers: [CharacterService]
})
export class WeaponsPage {

  public data = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private characterService: CharacterService) {
    this.data = this.characterService.getCharacter();
  }

  openWeaponDetail(weapon){
    this.navCtrl.push(WeapondetailPage, {weapon: weapon});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeaponsPage');
  }

}
