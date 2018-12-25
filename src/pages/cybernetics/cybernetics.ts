import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterService } from '../../app/characterService';
import { CyberwareDetailPage } from '../cyberware-detail/cyberware-detail';

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
  providers: [CharacterService]
})
export class CyberneticsPage {

  public data = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private characterService: CharacterService) {
    this.data = this.characterService.getCharacter();
  }

  openCyberwareDetail(cyberware){
    console.log("Cyberware selected:", cyberware);
    this.navCtrl.push(CyberwareDetailPage, {cyberware: cyberware});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CyberneticsPage');
  }

}
