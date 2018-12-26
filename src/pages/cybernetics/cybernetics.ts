import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterService } from '../../providers/characterSerivce/characterService';
import { CyberwareDetailPage } from '../cyberware-detail/cyberware-detail';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the CyberneticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cybernetics',
  templateUrl: 'cybernetics.html',
  providers: [DataProvider]
})
export class CyberneticsPage {

  public data = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.data = this.dataProvider.getCharacter();
  }

  openCyberwareDetail(cyberware){
    console.log("Cyberware selected:", cyberware);
    this.navCtrl.push(CyberwareDetailPage, {cyberware: cyberware});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CyberneticsPage');
  }

}
