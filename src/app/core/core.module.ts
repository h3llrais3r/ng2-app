// Use this to  core modules that should only be added once during startup
// see https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

import { CoreService } from './core.service';

@NgModule({
  imports: [
    CommonModule,
    Angulartics2Module.forRoot([Angulartics2GoogleTagManager])
  ],
  declarations: [],
  exports: [],
  providers: [
    CoreService
  ]
})
export class CoreModule { }
