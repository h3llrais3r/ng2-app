import { NgModule } from '@angular/core';
import { DataTableModule as PrimengDataTableModule } from 'primeng/primeng';

// shared module
import { SharedModule } from '../../shared/shared.module';

// datatable routing module
import { DatatableRoutingModule } from './datatable-routing.module';

// datatable components
import { DatatableComponent } from './datatable.component';

@NgModule({
  imports: [
    PrimengDataTableModule,
    SharedModule,
    DatatableRoutingModule
  ],

  declarations: [DatatableComponent]
})
export class DatatableModule { }
