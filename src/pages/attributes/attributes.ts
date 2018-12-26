import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterService } from '../../providers/characterSerivce/characterService';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the AttributesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attributes',
  templateUrl: 'attributes.html',
  providers: [DataProvider]
})
export class AttributesPage {

  public data = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.data = this.dataProvider.getCharacter();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AttributesPage');
  }

}
