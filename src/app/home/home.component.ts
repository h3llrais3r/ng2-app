import { Component, OnInit } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private angulartics2: Angulartics2) { }

  ngOnInit() {
    this.angulartics2.eventTrack.next({
      action: 'homeAction',
      properties: { category: 'homeCategory', label: 'homeLabel' }
    });
  }

}
