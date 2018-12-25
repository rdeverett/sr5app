import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterService } from '../../app/characterService';
import { WeaponsPage } from '../weapons/weapons';
import { ArmorPage } from '../armor/armor';
import { EquipmentPage } from '../equipment/equipment';
import { BiowarePage } from '../bioware/bioware';
import { CyberneticsPage } from '../cybernetics/cybernetics';

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
  providers: [CharacterService]
})
export class GearPage {

  public data = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private characterService: CharacterService) {
    this.data = this.characterService.getCharacter();
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
