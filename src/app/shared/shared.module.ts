// Use this to load shared modules
// https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-module
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CurrencyFormatPipe } from './currency-format.pipe';
import { NumberFormatPipe } from './number-format.pipe';

// Register custom locales
import localeNl from '@angular/common/locales/nl';
import localeNlExtra from '@angular/common/locales/extra/nl';
registerLocaleData(localeNl, 'nl-BE', localeNlExtra);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    CurrencyFormatPipe,
    NumberFormatPipe
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CurrencyFormatPipe,
    NumberFormatPipe
  ],
  providers: []
})
export class SharedModule { }
