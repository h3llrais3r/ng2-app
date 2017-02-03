import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng2-popover',
  templateUrl: './ng2-popover.component.html',
  styleUrls: ['./ng2-popover.component.css']
})
export class Ng2PopoverComponent implements OnInit {

  public content: string = "dynamic content";

  constructor() { }

  ngOnInit() {
  }

}
