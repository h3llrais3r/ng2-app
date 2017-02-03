// Use this to load shared modules
// https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CurrencyFormatPipe } from './currency-format.pipe';
import { NumberFormatPipe } from './number-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    CurrencyFormatPipe,
    NumberFormatPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    CurrencyFormatPipe,
    NumberFormatPipe
  ],
  providers: []
})
export class SharedModule { }
