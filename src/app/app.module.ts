import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GridItemsComponent } from './components/grid-items/grid-items.component';
import { ItemComponent } from './components/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridItemsComponent,
    ItemComponent,
    FilterProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
