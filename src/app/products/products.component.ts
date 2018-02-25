import { Component, OnInit } from '@angular/core';


import { EditorStatus } from './status';
import { Product } from './../types/product';
import { ProductService } from './../services/product/product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  newProduct: Product = new Product();

  editorStatus: EditorStatus = EditorStatus.Nothing;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Get all exisiting products.
    this.products = this.productService.products;
  }

  // Set the status when adding/editing a product.
  setStatusToNewOrEdit() {
    this.editorStatus = EditorStatus.NewOrEdit;
  }

  // Check if the given status is new or edit status.
  isStatusNewOrEdit() {
    return this.editorStatus === EditorStatus.NewOrEdit;
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
