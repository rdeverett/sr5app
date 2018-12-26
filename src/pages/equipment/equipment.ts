import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { EquipmentdetailPage } from '../equipmentdetail/equipmentdetail';

/**
 * Generated class for the EquipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html',
})
export class EquipmentPage {

  data = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.data = this.dataProvider.getCharacter();
  }

  openequipmentDetail(equipment){
    console.log("Equipment selected:", equipment);
    this.navCtrl.push(EquipmentdetailPage, {equipment: equipment});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentPage');
  }

}
