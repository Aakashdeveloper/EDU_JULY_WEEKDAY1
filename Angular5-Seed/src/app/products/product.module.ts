import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './products.component';
import { UpperPipe } from './myUpper.pipe';
import { PricePipe } from './myPrice.pipe';
import { ProductValueFilter } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductComponent,
        UpperPipe,
        PricePipe,
        ProductValueFilter,
        ProductDetailComponent,
    ],
    imports: [
        RouterModule.forChild([
            {path: 'product', component: ProductComponent },
            {path: 'product/:id', component: ProductDetailComponent},
        ]),
        SharedModule
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {

}
