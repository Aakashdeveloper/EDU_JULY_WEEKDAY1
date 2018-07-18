import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ProductComponent } from './products/products.component';

@NgModule({
    // All Component come here
    declarations: [
        AppComponent,
        DashboardComponent,
        ProductComponent
     ],
     // All Modules will declare here
    imports: [
        BrowserModule
    ],
    // Only main component
    bootstrap: [
        AppComponent
     ],
     // Services will declare here
    providers: [ ]
})

export class AppModule {

}
