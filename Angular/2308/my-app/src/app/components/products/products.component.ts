import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { CartService } from '../../../services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Output() onAddToCart = new EventEmitter();
  products: Product[] = [];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  addToCart(id): void {
    this.cartService.addToCart(id).subscribe((res) => {
      this.onAddToCart.emit(id);
    });
  }
}
