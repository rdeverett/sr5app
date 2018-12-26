import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ArmordetailPage } from '../armordetail/armordetail';

/**
 * Generated class for the ArmorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-armor',
  templateUrl: 'armor.html',
  providers: [DataProvider]
})
export class ArmorPage {

  public data = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.data = this.dataProvider.getCharacter();
  }

  openArmorDetail(armor){
    this.navCtrl.push(ArmordetailPage, {armor: armor});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArmorPage');
  }

}
