import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterService } from '../../providers/characterSerivce/characterService';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the SkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
  providers: [DataProvider]
})
export class SkillsPage {

  
  public data = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.data = this.dataProvider.getCharacter();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }

}
