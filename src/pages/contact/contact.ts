import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterService } from '../../app/characterService';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [CharacterService]
})
export class ContactPage {

  data = null;

  constructor(public navCtrl: NavController, private characterService: CharacterService) {

    this.data = characterService.getCharacter();

  }


}
