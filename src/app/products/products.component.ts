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

  // Flag for editor mode.
  editorMode = false;

  // The current selected product.
  selectedProductId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Get all exisiting products.
    this.products = this.productService.products;
  }

  // Set mode when adding/editing product's title.
  setModeToEditor(id?: number) {
    if (id) {
      this.selectedProductId = id;
    }
    this.editorMode = true;
  }

  // Check if we are in the editor mode.
  isEditorMode() {
    return this.editorMode;
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
