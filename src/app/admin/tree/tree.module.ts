import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TreeModule as PrimengTreeModule } from 'primeng/primeng';

// shared module
import { SharedModule } from '../../shared/shared.module';

// routing module
import { TreeRoutingModule } from './tree-routing.module';

// tree components
import { TreeComponent } from './tree.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    PrimengTreeModule,
    TreeRoutingModule
  ],
  declarations: [TreeComponent]
})
export class TreeModule { }
