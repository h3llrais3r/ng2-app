import { Component } from '@angular/core';
import { Angulartics2GoogleTagManager } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng2-app';

  constructor(angulartics2GoogleTagManager: Angulartics2GoogleTagManager) { }
}
