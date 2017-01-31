// Use this to load shared modules
// https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {CurrencyFormatPipe} from './currency-format.pipe';
import {NumberFormatPipe} from './number-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CurrencyFormatPipe,
    NumberFormatPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    CurrencyFormatPipe,
    NumberFormatPipe
  ],
  providers: []
})
export class SharedModule { }
