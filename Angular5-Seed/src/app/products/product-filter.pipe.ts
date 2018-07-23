import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products.model' ;


@Pipe({
    name: 'productFilter'
})

export class ProductValueFilter implements PipeTransform {
    transform(value: IProduct[], userText: string) {
        userText = userText ? userText.toLowerCase() : null;
        return userText ? value.filter((aakash: IProduct) =>
            aakash.productName.toLowerCase().indexOf(userText) !== -1) : value;
        }
    }

