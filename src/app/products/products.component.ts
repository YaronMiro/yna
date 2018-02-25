import { Product } from './../types/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  private selectedProductId: number | null;

  newProduct: Product;

  products: Product[];

  constructor() {
    this.products = [];
    this.newProduct = {
      id: null,
      title: null,
      isChecked: false,
    };
  }

  ngOnInit() {}

  // Toggle the product "checked" status.
  toggleCheckedStatus(product: Product): void {}

  // Delete product.
  delete(id: number): void {}

  // Add product.
  add(product: Product): void {}
}
