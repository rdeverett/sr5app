import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the EquipmentdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipmentdetail',
  templateUrl: 'equipmentdetail.html',
})
export class EquipmentdetailPage {

  equipment = null;
  isShowMoreEnabled = false;
  MAX_DESCRIPTION_LENGTH = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.equipment = navParams.get("equipment"); 

    this.MAX_DESCRIPTION_LENGTH = dataProvider.MAX_DESCRIPTION_LENGTH;

    this.equipment.shortDescription = this.equipment.description;
    if(this.equipment.description.length>this.MAX_DESCRIPTION_LENGTH){
      this.equipment.shortDescription = this.equipment.description.substring(0,350);
    }


    console.log("Description length:", this.equipment.description.length);
  }

  showMore(){
    this.isShowMoreEnabled = !this.isShowMoreEnabled;
    console.log("click");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentdetailPage');
  }

}
