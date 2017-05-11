import { Component, OnInit } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'app-ngx-bootstrap',
  templateUrl: './ngx-bootstrap.component.html',
  styleUrls: ['./ngx-bootstrap.component.css']
})
export class NgxBootstrapComponent implements OnInit {

  constructor(private angulartics2: Angulartics2) { }

  ngOnInit() {
    this.angulartics2.eventTrack.next({
      action: 'ngxbootstrapAction',
      properties: { category: 'ngxbootstrapCategory', label: 'ngxbootstrapLabel' }
    });
  }

}
