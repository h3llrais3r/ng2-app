import { NgModule } from '@angular/core';
import { DataTableModule as PrimengDataTableModule } from 'primeng/primeng';
import { TreeModule as PrimengTreeModule } from 'primeng/primeng'

import { SharedModule } from '../../shared/shared.module';

import { PrimengRoutingModule } from './primeng-routing.module';
import { PrimengComponent } from './primeng.component';
import { DatatableComponent } from './datatable/datatable.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  imports: [
    PrimengDataTableModule,
    PrimengTreeModule,
    SharedModule,
    PrimengRoutingModule
  ],
  declarations: [PrimengComponent, DatatableComponent, TreeComponent]
})
export class PrimengModule { }
