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

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // Get all exisiting products.
    this.productService.products.subscribe(products => this.products = products);
  }

  // Get all products.
  // getAll() {
  //   this.productService.products.subscribe(products => this.products = products);
  // }


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
    // return this.products.length ? true : false;
    return true;
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
        this.resetEditor();
      });
  }

  // Update product.
  update(): void {
    this.productService.update(this.selectedProduct).subscribe();
  }

  // Toggle the product "checked" status.
  toggleCheckedStatus(product: Product): void {
    this.productService.update(product).subscribe(_ => this.resetEditor());
  }

  // Delete product.
  delete(id: number): void {
    this.products = this.products.filter(prduct => id !== prduct.id);
    this.productService.delete(id).subscribe();
  }

  // Reset the editor.
  resetEditor(): void {
    // Reset the editor to "add" new product mode.
    this.newProduct = new Product();
    this.selectedProduct = null;
    this.editorMode = false;
  }

}
