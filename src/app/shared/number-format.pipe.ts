import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
    name: 'numberformat'
})
export class NumberFormatPipe implements PipeTransform {

    constructor() {
        console.log('constructor pipe');
    }

    transform(value: any, digits?: string, locale: string = 'nl-BE'): string {
        // safe guard for non value
        if (!value) {
            return '';
        }
        return new DecimalPipe(locale).transform(value, digits);
    }

}