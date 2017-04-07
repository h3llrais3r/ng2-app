import { NgModule } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap';

import { SharedModule } from '../../shared/shared.module';

import { NgxBootstrapRoutingModule } from './ngx-bootstrap-routing.module';
import { NgxBootstrapComponent } from './ngx-bootstrap.component';
import { NgxPopoverComponent } from './ngx-popover/ngx-popover.component';

@NgModule({
  imports: [
    SharedModule,
    NgxBootstrapRoutingModule,
    PopoverModule.forRoot()
  ],
  declarations: [NgxBootstrapComponent, NgxPopoverComponent]
})
export class NgxBootstrapModule { }
