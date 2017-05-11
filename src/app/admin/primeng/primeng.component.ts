import { Component, OnInit } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css']
})
export class PrimengComponent implements OnInit {

  constructor(private angulartics2: Angulartics2) { }

  ngOnInit() {
    this.angulartics2.eventTrack.next({
      action: 'primengAction',
      properties: { category: 'primengCategory', label: 'primengLabel' }
    });
  }

}
