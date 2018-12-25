import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterService } from '../../app/characterService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CharacterService]
})
export class HomePage {

  data = null;

  constructor(public navCtrl: NavController, private characterService: CharacterService) {

    this.data = characterService.getCharacter();

  }


}
