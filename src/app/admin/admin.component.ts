import { Component, OnInit, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  mynumber: number;
  mynumberstring: string;

  constructor() {
    this.mynumber = 1234567.23;
    this.mynumberstring = '1234567.23';
    console.log(LOCALE_ID);
   }

  ngOnInit() {
  }

}
