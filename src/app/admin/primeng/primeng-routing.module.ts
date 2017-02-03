import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimengComponent } from './primeng.component';
import { DatatableComponent } from './datatable/datatable.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {
    path: '',
    component: PrimengComponent
  },
  {
    path: 'datatable',
    component: DatatableComponent
  },
  {
    path: 'tree',
    component: TreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PrimengRoutingModule { }
