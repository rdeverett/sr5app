import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage'
import { IfObservable } from 'rxjs/observable/IfObservable';


/**
 * Generated class for the CombatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-combat',
  templateUrl: 'combat.html',
})
export class CombatPage {

  public data = null;
  public physicalDamageTrack = null;
  public stunDamageTrack = null;
  public lastSelectedStunIndex = -1;
  public lastSelectedPhysicalIndex = -1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, private storage: Storage) {
    this.data = this.dataProvider.getCharacter();
    this.physicalDamageTrack = this.dataProvider.getPhysicalDamageTrack();
    this.stunDamageTrack = this.dataProvider.getStunDamageTrack();
    this.storage.get('lastSelectedStunIndex').then((stunIndex) => {
      this.toggleStunDamage(stunIndex);
    });
    this.storage.get('lastSelectedPhysicalIndex').then((physicalIndex) => {
      this.togglePhysicalDamage(physicalIndex);
    });
  }

  toggleBackground(index, previousIndex, damageTrack) {
    // //Checks to see if there is a previousIndex
    if (previousIndex != -1) {
      //Fills in boxes up to selected index from previous index
      if (previousIndex < index) {
        for (var i = previousIndex + 1; i <= index; i++) {
          damageTrack[i].status = true;
        }
        return;
      }
      if (previousIndex > index) {
        for (var i = index + 1; i <= previousIndex; i++) {
          if (!damageTrack[i].status) {
            damageTrack[i].status = true;
          }
          else {
            damageTrack[i].status = false;
          }
        }
        return;
      }
    }
    this.toggleBackgroundToIndex(index, damageTrack);
    return;
  }

  toggleBackgroundToIndex(index, damageTrack) {
    for (var i = 0; i <= index; i++) {
      if (!damageTrack[i].status) {
        damageTrack[i].status = true;
      }
      else {
        damageTrack[i].status = false;
      }
    }
  }

  togglePhysicalDamage(index) {
    if (index == this.lastSelectedPhysicalIndex) {
      this.lastSelectedPhysicalIndex = -1;
      this.storage.set('lastSelectedPhysicalIndex', this.lastSelectedPhysicalIndex);
      this.toggleBackground(index, this.lastSelectedPhysicalIndex, this.physicalDamageTrack.number)
      return;
    }
    this.toggleBackground(index, this.lastSelectedPhysicalIndex, this.physicalDamageTrack.number);
    this.lastSelectedPhysicalIndex = index;
    this.storage.set('lastSelectedPhysicalIndex', this.lastSelectedPhysicalIndex);
  }

  toggleStunDamage(index) {
    if (index == this.lastSelectedStunIndex) {
      this.lastSelectedStunIndex = -1;
      this.storage.set('lastSelectedStunIndex', this.lastSelectedStunIndex);
      this.toggleBackground(index, this.lastSelectedStunIndex, this.stunDamageTrack.number);
      return;
    }
    this.toggleBackground(index, this.lastSelectedStunIndex, this.stunDamageTrack.number);
    this.lastSelectedStunIndex = index;
    this.storage.set('lastSelectedStunIndex', this.lastSelectedStunIndex);
  }

  getBackgroundClass(status) {
    let className = "";
    if (!status) {
      className = "disabled";
      return className;
    }
    else {
      className = "enabled";
      return className;
    }
  }

  ionViewDidLoad() {
  }

}
