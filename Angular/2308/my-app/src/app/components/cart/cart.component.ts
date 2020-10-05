import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges {
  @Input() updated;
  prevUpdated;
  products: Array<any>;

  constructor(private cartService: CartService) {}

  updateCart() {
    this.cartService.getCart().subscribe(({ data }) => {
      this.products = data.products.map((item) => item.name);
    });
  }

  ngOnInit(): void {
    this.prevUpdated = this.updated;
    this.updateCart();
  }

  ngOnChanges() {
    if (this.updated != this.prevUpdated) {
      this.prevUpdated = this.updated;
      this.updateCart();
    }
  }
}
