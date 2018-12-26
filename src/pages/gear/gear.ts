import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterService } from '../../providers/characterSerivce/characterService';
import { WeaponsPage } from '../weapons/weapons';
import { ArmorPage } from '../armor/armor';
import { EquipmentPage } from '../equipment/equipment';
import { BiowarePage } from '../bioware/bioware';
import { CyberneticsPage } from '../cybernetics/cybernetics';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the GearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gear',
  templateUrl: 'gear.html',
  providers: [DataProvider]
})
export class GearPage {

  public data = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.data = this.dataProvider.getCharacter();
  }

  openWeaponsPage(){
    this.navCtrl.push(WeaponsPage);
  }

  openArmorPage(){
    this.navCtrl.push(ArmorPage);
  }

  openEquipmentPage(){
    this.navCtrl.push(EquipmentPage);
  }
  
  openCyberneticsPage(){
    this.navCtrl.push(CyberneticsPage);
  }
  
  openBiowarePage(){
    this.navCtrl.push(BiowarePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GearPage');
  }

}
