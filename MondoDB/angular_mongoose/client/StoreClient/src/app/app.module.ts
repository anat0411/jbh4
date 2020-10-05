import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';

import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@NgModule({
  declarations: [AppComponent, CartComponent, ProductsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
