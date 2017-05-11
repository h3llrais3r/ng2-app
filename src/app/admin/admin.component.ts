import { Component, OnInit } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  mynumber: number;
  mynumberstring: string;

  constructor(private angulartics2: Angulartics2) {
    this.mynumber = 1234567.23;
    this.mynumberstring = '1234567.23';
  }

  ngOnInit() {
    this.angulartics2.eventTrack.next({
      action: 'adminAction',
      properties: { category: 'adminCategory', label: 'adminLabel' }
    });
  }

}
