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
import { WeaponsPage } from '../pages/weapons/weapons';
import { ArmorPage } from '../pages/armor/armor';
import { EquipmentPage } from '../pages/equipment/equipment';
import { CyberneticsPage } from '../pages/cybernetics/cybernetics';
import { BiowarePage } from '../pages/bioware/bioware';
import { WeapondetailPage } from '../pages/weapondetail/weapondetail';
import { CyberwareDetailPage } from '../pages/cyberware-detail/cyberware-detail';
import { DataProvider } from '../providers/data/data';
import { ArmordetailPage } from '../pages/armordetail/armordetail';
import { EquipmentdetailPage } from '../pages/equipmentdetail/equipmentdetail';
import { BiowareDetailPage } from '../pages/bioware-detail/bioware-detail';
import { CharacterService } from '../providers/characterSerivce/characterService';
import { CharacterPortraitSelectionPage } from '../pages/character-portrait-selection/character-portrait-selection';

@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    AttributesPage,
    SkillsPage,
    GearPage,
    CombatPage,    
    TabsPage,
    WeaponsPage,
    ArmorPage,
    EquipmentPage,
    CyberneticsPage,
    BiowarePage,
    BiowareDetailPage,
    WeapondetailPage,
    CyberwareDetailPage,
    ArmordetailPage,
    EquipmentdetailPage,
    CharacterPortraitSelectionPage
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
    TabsPage,
    WeaponsPage,
    ArmorPage,
    EquipmentPage,
    CyberneticsPage,
    BiowarePage,
    BiowareDetailPage,
    WeapondetailPage,
    CyberwareDetailPage,
    ArmordetailPage,
    EquipmentdetailPage,
    CharacterPortraitSelectionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    CharacterService
  ]
})
export class AppModule {}
