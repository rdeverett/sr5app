import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InfoPage } from '../pages/info/info';
import { AttributesPage } from '../pages/attributes/attributes';
import { SkillsPage } from '../pages/skills/skills';
import { GearPage } from '../pages/gear/gear';
import { CombatPage } from '../pages/combat/combat';

@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    AttributesPage,
    SkillsPage,
    GearPage,
    CombatPage,    
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    AttributesPage,
    SkillsPage,
    GearPage,
    CombatPage,    
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
