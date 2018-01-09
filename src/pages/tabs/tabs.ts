import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Dashboard;
  tab2Root = SettingsPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
