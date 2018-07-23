import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { VeiculosPage } from '../veiculos/veiculos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = VeiculosPage;
  tab4Root = FeedPage;

  constructor() {

  }
}
