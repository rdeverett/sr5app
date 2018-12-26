import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterService } from '../../providers/characterSerivce/characterService';
import { WeapondetailPage } from '../weapondetail/weapondetail';
import { DataProvider } from '../../providers/data/data';

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
  providers: [DataProvider]
})
export class WeaponsPage {

  public data = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.data = this.dataProvider.getCharacter();
  }

  openWeaponDetail(weapon){
    this.navCtrl.push(WeapondetailPage, {weapon: weapon});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeaponsPage');
  }

}
