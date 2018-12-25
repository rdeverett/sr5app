import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cyberware = navParams.get("cyberware"); 

    this.cyberware.shortDescription = this.cyberware.description;
    if(this.cyberware.description.length>350){
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
