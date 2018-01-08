import { Component } from '@angular/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng2-app';

  constructor(angulartics2GoogleTagManager: Angulartics2GoogleTagManager, coreService: CoreService) {
    coreService.loadScripts();
  }
}
