import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the BiowareDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bioware-detail',
  templateUrl: 'bioware-detail.html',
  providers: [DataProvider]
})
export class BiowareDetailPage {

  bioware = null;
  isShowMoreEnabled = false;
  MAX_DESCRIPTION_LENGTH = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.bioware = navParams.get("bioware"); 

    this.MAX_DESCRIPTION_LENGTH = dataProvider.MAX_DESCRIPTION_LENGTH;

    this.bioware.shortDescription = this.bioware.description;
    if(this.bioware.description.length>this.MAX_DESCRIPTION_LENGTH){
      this.bioware.shortDescription = this.bioware.description.substring(0,this.MAX_DESCRIPTION_LENGTH);
    }


    console.log("Description length:", this.bioware.description.length);
  }

  showMore(){
    this.isShowMoreEnabled = !this.isShowMoreEnabled;
    console.log("click");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiowareDetailPage');
  }

}
