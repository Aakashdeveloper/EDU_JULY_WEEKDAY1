import { Component, OnInit } from '@angular/core';
import { IProduct} from './products.model';
import { ProductService } from './product.service';


@Component({
    selector: 'app-product',
    templateUrl: './products.component.html',
    // styles: ['thead{color:olive}', 'h3{color:red}']
    styleUrls: [ './products.component.css', '../../assets/styleout.css' ]
})

export class ProductComponent implements OnInit {
    title: String = '*****Product List******';
    showTable: Boolean = true;
    showImage: Boolean = false;
    filterText: String;
    imageWidth: Number = 50;
    products: IProduct[];

    constructor(private _productService: ProductService) {}

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this._productService.getProduct();
    }

    onDataRecive(message: string) {
        this.title = '***product list >>> ' + message;
    }
}



/*
one way
--data binding  {{ }}
--property binding [ ]
--event binding ( )
two way [( )]

var a  = 10
string = 'hjhbjhbhj' '8'
number = 8798 88
boolean= true/ false

indexof
filter


function add(a,b){
    return a+b
}

var add = (a,b) => { return a+b }
*/
