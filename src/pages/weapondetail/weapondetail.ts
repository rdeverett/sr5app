import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WeapondetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weapondetail',
  templateUrl: 'weapondetail.html',
})
export class WeapondetailPage {

  weapon = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.weapon = navParams.get("weapon");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeapondetailPage');
  }

}
