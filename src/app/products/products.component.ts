import { Component, OnInit } from '@angular/core';

import { Product } from './../types/product';
import { ProductService } from './../services/product/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  selectedProductId: number | null = null;

  products: Product[];

  newProduct: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // Get all exisiting products.
    this.products = this.productService.products;
  }

  // Toggle the product "checked" status.
  toggleCheckedStatus(product: Product): void {
    this.productService.toggleCheckedStatus(product);
  }

  // Delete product.
  delete(id: number): void {
    this.productService.delete(id);

    // FIX!! hack to update list by reference.
    this.products = this.productService.products;
  }

  // Add product.
  add(product: Product): void {
    this.productService.add(this.newProduct);
    this.newProduct = new Product();
  }
}
