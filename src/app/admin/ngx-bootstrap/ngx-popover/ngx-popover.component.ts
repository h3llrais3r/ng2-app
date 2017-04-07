import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-popover',
  templateUrl: './ngx-popover.component.html',
  styleUrls: ['./ngx-popover.component.css']
})
export class NgxPopoverComponent implements OnInit {

  public content: string = "dynamic content";

  constructor() { }

  ngOnInit() {
  }

}
