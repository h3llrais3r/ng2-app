import { NgModule } from '@angular/core';
import { Uploader } from 'angular2-http-file-upload';
import { ProgressBarModule } from 'primeng/primeng';

import { SharedModule } from '../../shared/shared.module';

import { FileuploadRoutingModule } from './fileupload-routing.module';
import { FileuploadComponent } from './fileupload.component';

@NgModule({
  imports: [
    ProgressBarModule,
    SharedModule,
    FileuploadRoutingModule,
  ],
  declarations: [FileuploadComponent],
  providers: [
    Uploader
  ]
})
export class FileuploadModule { }
