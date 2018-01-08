import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
    name: 'currencyformat'
})
export class CurrencyFormatPipe implements PipeTransform {

    transform(value: any, currencyCode: string = 'EUR', symbolDisplay: 'symbol', digits?: string, locale: string = 'nl-BE'): string {
        // safe guard for non value
        if (!value) {
            return '';
        }
        // return currency with the format of the specified locale
        return new CurrencyPipe(locale).transform(value, currencyCode, symbolDisplay, digits);
    }

}