import { Component } from '@angular/core';
import { IProduct} from './products.model';


@Component({
    selector: 'app-product',
    templateUrl: './products.component.html',
    // styles: ['thead{color:olive}', 'h3{color:red}']
    styleUrls: [ './products.component.css', '../../assets/styleout.css' ]
})

export class ProductComponent {
    title: String = '*****Product List******';
    showTable: Boolean = true;
    showImage: Boolean = false;
    filterText: String;
    imageWidth: Number = 50;
    products: IProduct[] = [
        {
          '_id': '5a05dacc734d1d68d42d31f3',
          'productId': 1,
          'productName': 'Leaf Rake',
          'productCode': 'GDN-0011',
          'releaseDate': 'March 19, 2016',
          'description': 'Leaf rake with 48-inch wooden handle.',
          'price': 19.95,
          'starRating': 3.5,
          'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        },
        {
          '_id': '5a05daec734d1d68d42d32ca',
          'productId': 2,
          'productName': 'Garden Cart',
          'productCode': 'GDN-0023',
          'releaseDate': 'March 18, 2016',
          'description': '15 gallon capacity rolling garden cart',
          'price': 32.99,
          'starRating': 4.2,
          'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        }
        ,
        {
          '_id': '5a05daec734d1d68d42d32ca',
          'productId': 2,
          'productName': 'Garden Cart',
          'productCode': 'GDN-0023',
          'releaseDate': 'March 18, 2016',
          'description': '15 gallon capacity rolling garden cart',
          'price': 12.99,
          'starRating': 4.2,
          'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
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
