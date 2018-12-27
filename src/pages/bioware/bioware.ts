import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BiowareDetailPage } from '../bioware-detail/bioware-detail';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the BiowarePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bioware',
  templateUrl: 'bioware.html',
  providers: [DataProvider]
})
export class BiowarePage {

  public data = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.data = this.dataProvider.getCharacter();
  }

  openBiowareDetail(bioware){
    this.navCtrl.push(BiowareDetailPage, {bioware: bioware});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BiowarePage');
  }

}
