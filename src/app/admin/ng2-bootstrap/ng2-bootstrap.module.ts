import { NgModule } from '@angular/core';
import { PopoverModule } from 'ng2-bootstrap';

import { SharedModule } from '../../shared/shared.module';

import { Ng2BootstrapRoutingModule } from './ng2-bootstrap-routing.module';
import { Ng2BootstrapComponent } from './ng2-bootstrap.component';
import { Ng2PopoverComponent } from './ng2-popover/ng2-popover.component';

@NgModule({
  imports: [
    SharedModule,
    Ng2BootstrapRoutingModule,
    PopoverModule.forRoot()
  ],
  declarations: [Ng2BootstrapComponent, Ng2PopoverComponent]
})
export class Ng2BootstrapModule { }
