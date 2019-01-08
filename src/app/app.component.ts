import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { CharacterService } from '../providers/characterSerivce/characterService';
import { DataProvider } from '../providers/data/data';

@Component({
  templateUrl: 'app.html',
  providers: [DataProvider, CharacterService]
})
export class MyApp {
  rootPage:any = TabsPage;

  data = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dataProvider: DataProvider, characterService: CharacterService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.data = dataProvider.getCharacter();    
  }
}
