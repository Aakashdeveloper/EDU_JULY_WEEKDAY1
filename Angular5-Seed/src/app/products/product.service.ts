import { Injectable } from '@angular/core';
import { IProduct } from './products.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class ProductService {

    private _productUrl = 'https://ngapi4.herokuapp.com/api/getProducts';

    constructor(private _http: Http) {}

    getProduct(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
          .map((response: Response) => response.json())
          .catch(this.handleError);
    }

    private handleError(error: Response) {
      return Observable.throw(error.statusText || 'Server error');
    }
}
