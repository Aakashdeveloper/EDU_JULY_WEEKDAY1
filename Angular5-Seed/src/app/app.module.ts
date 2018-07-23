import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ProductComponent } from './products/products.component';
import { UpperPipe } from './products/myUpper.pipe';
import { PricePipe } from './products/myPrice.pipe';
import { ProductValueFilter } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

@NgModule({
    // All Component come here
    declarations: [
        AppComponent,
        DashboardComponent,
        ProductComponent,
        UpperPipe,
        PricePipe,
        ProductValueFilter,
        StarComponent
     ],
     // All Modules will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    // Only main component
    bootstrap: [
        AppComponent
     ],
     // Services will declare here
    providers: [
        ProductService
    ]
})

export class AppModule {

}
