import { Component, OnInit } from '@angular/core';

import { Product } from './../types/product';
import { ProductService } from './../services/product/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  // Products collection.
  products: Product[];

  // New product placeholder.
  newProduct: Product = new Product();

  // The current selected product.
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  // Get all products.
  getProducts() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  // Get product.
  get(id: number): void {
    this.productService.get(id)
      .subscribe(product => this.selectedProduct = product);
  }

  // Add product.
  add(product: Product): void {
    product.title = product.title.trim();
    // Exit eraly in case title is empty
    if (!product.title) {
      return;
    }

    this.productService.add(product)
      .subscribe(newProduct => {
        this.products.push(newProduct);
        this.newProduct = new Product();
        this.selectedProduct = null;
      });
  }
  // Update product.
  update(produt: Product): void {
    this.productService.update(produt).subscribe();
  }

  // Toggle the product "checked" status.
  toggleCheckedStatus(product: Product): void {
    this.productService.update(product).subscribe(_ => {
      if (this.selectedProduct && product.id === this.selectedProduct.id) {
        this.selectedProduct = null;
      }
    });
  }

  // Delete product.
  delete(id: number): void {
    this.products = this.products.filter(prduct => id !== prduct.id);
    this.productService.delete(id).subscribe(_ => {
      if (this.selectedProduct && this.selectedProduct.id === id) {
        this.selectedProduct = null;
      }
    });
  }

  // Set editor to "add" or "Edit" mode.
  setEditorMode(product?: Product): void {
    this.selectedProduct = product.id ? product : null;
  }

  // Check if this is the selected product.
  isSelectedProduct(id: number): boolean {
    return (this.selectedProduct && this.selectedProduct.id === id);
  }

  // Check if there are any products.
  hasProducts(): boolean {
    return (this.products && this.products.length) ? true : false;
  }

}
