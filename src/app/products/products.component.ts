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
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Get all exisiting products.
    this.products = this.productService.products;
  }

  // Set editor to "add" or "Edit" mode.
  setEditorMode(product?: Product): void {
    this.selectedProduct = product.id ? product : null;
    this.editorMode = true;
  }

  // Check if we are in editor mode.
  isEditorMode(): boolean {
    return this.editorMode;
  }

  // Check if this is the selected product.
  isSelectedProduct(id: number): boolean {
    return (this.selectedProduct && this.selectedProduct.id === id);
  }

  // Check if there are any products.
  hasProducts(): boolean {
    return this.products.length ? true : false;
  }

  // Add product.
  add(product: Product): void {
    const newTitle = this.productService.sinitizeString(product.title);
    // Exit early in case title is empty
    if (!newTitle) {
      return;
    }
    product.title = newTitle;
    this.productService.add(product);
    this.resetEditor();
  }

  // Reset the editor.
  resetEditor(): void {
    // Reset the editor to "add" new product mode.
    this.newProduct = new Product();
    this.selectedProduct = null;
    this.editorMode = false;
  }

  // Update product.
  update(product: Product): void {
    const newTitle = this.productService.sinitizeString(product.title);
    // Exit early in case title is empty
    if (!newTitle) {
      return;
    }
    this.productService.update(product.id, {title: newTitle});
    this.resetEditor();
  }

  // Toggle the product "checked" status.
  toggleCheckedStatus(product: Product): void {
    this.productService.toggleCheckedStatus(product);
    this.resetEditor();
  }

  // Delete product.
  delete(id: number): void {
    this.productService.delete(id);
    this.resetEditor();

    // FIX!! hack to update list by reference.
    this.products = this.productService.products;
  }
}
