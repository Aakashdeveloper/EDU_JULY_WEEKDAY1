import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myupper'
})

export class UpperPipe implements PipeTransform {
    transform(value: string, typeval: string): string {
        if (typeval === 'upper') {
            value = value.toUpperCase();
        }else {
            value = value.toLowerCase();
        }

        return  value;
    }
}
