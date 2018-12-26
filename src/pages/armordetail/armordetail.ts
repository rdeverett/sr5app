import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ArmordetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-armordetail',
  templateUrl: 'armordetail.html',
})
export class ArmordetailPage {

  armor = null;
  isShowMoreEnabled = false;
  MAX_DESCRIPTION_LENGTH = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.armor = navParams.get("armor"); 

    this.MAX_DESCRIPTION_LENGTH = dataProvider.MAX_DESCRIPTION_LENGTH;

    this.armor.shortDescription = this.armor.description;
    if(this.armor.description.length>this.MAX_DESCRIPTION_LENGTH){
      this.armor.shortDescription = this.armor.description.substring(0,350);
    }


    console.log("Description length:", this.armor.description.length);
  }

  showMore(){
    this.isShowMoreEnabled = !this.isShowMoreEnabled;
    console.log("click");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArmordetailPage');
  }

}
