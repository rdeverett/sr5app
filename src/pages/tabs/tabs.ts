import { Component } from '@angular/core';

import { InfoPage } from '../info/info';
import { AttributesPage } from '../attributes/attributes';
import { SkillsPage } from '../skills/skills';
import { GearPage } from '../gear/gear';
import { CombatPage } from '../combat/combat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InfoPage;
  tab2Root = AttributesPage;
  tab3Root = SkillsPage;
  tab4Root = GearPage;
  tab5Root = CombatPage;

  constructor() {

  }
}
