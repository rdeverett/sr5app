import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterService } from '../../app/characterService';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [CharacterService]
})

export class AboutPage {

  data = null;

  constructor(public navCtrl: NavController, private characterService: CharacterService) {

    this.data = characterService.getCharacter();

  }


}
