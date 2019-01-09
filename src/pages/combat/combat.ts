import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the CombatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-combat',
  templateUrl: 'combat.html',
})
export class CombatPage {

  public data = null;
  public physicalDamageTrack = null;
  public stunDamageTrack = null;
  public hasBeenClicked = false;
  public backgroundColor;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.data = this.dataProvider.getCharacter();
    this.physicalDamageTrack = this.dataProvider.getPhysicalDamageTrack();
    this.stunDamageTrack = this.dataProvider.getStunDamageTrack();
  }

  toggleSquareBackground(index){ 
    

    console.log(index);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CombatPage');
    console.log(this.dataProvider.getPhysicalDamageTrack());
  }

}
