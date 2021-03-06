import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the CyberwareDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cyberware-detail',
  templateUrl: 'cyberware-detail.html',
})
export class CyberwareDetailPage {

  cyberware = null;
  isShowMoreEnabled = false;
  MAX_DESCRIPTION_LENGTH = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.cyberware = navParams.get("cyberware"); 

    this.MAX_DESCRIPTION_LENGTH = dataProvider.MAX_DESCRIPTION_LENGTH;

    this.cyberware.shortDescription = this.cyberware.description;
    if(this.cyberware.description.length>this.MAX_DESCRIPTION_LENGTH){
      this.cyberware.shortDescription = this.cyberware.description.substring(0,350);
    }


    console.log("Description length:", this.cyberware.description.length);
  }

  showMore(){
    this.isShowMoreEnabled = !this.isShowMoreEnabled;
    console.log("click");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CyberwareDetailPage');
  }

}
