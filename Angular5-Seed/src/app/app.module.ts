import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { StarComponent } from './shared/star.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductModule } from './products/product.module';

@NgModule({
    // All Component come here
    declarations: [
        AppComponent,
        DashboardComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent,
     ],
     // All Modules will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'order', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
        ]),
        ProductModule
    ],
    // Only main component
    bootstrap: [
        AppComponent
     ],
     // Services will declare here
    providers: []
})

export class AppModule {

}
