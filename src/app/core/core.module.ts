// Use this to  core modules that should only be added once during startup
// see https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class CoreModule { }
