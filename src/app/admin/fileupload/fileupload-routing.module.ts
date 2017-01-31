import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileuploadComponent } from './fileupload.component';

const routes: Routes = [
  {
    path: '',
    component: FileuploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FileuploadRoutingModule { }
