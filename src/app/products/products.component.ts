import { Component, OnInit } from '@angular/core';

import { Product } from './../types/product';
import { ProductService } from './../services/product/product.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


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

  // The product updated title Observable.
  productUpdatedTitle$: Observable<any>;
  private fieldValue = new Subject<string>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // Get all of the products.
    this.getProducts();

    this.productUpdatedTitle$ = this.fieldValue.pipe(
      // wait 500ms after each keystroke before considering the input value.
      debounceTime(1000),

      // ignore new input value if same as previous input value.
      distinctUntilChanged(),

      // switch to new input value observable each time the term changes
      switchMap( (term: string) => this.productService.updateProductField(term)
      ),
    );
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
    // Exit eraly in case title is empty.
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

   // Push the field input into the observable stream.
   autoUpdateFieldInput(term: string): void {
    this.fieldValue.next(term);
  }

  // Toggle the product "checked" status.
  toggleCheckedStatus(product: Product): void {
    this.productService.update(product).subscribe(_ => {
      // Reset the selectd product in case it's the on been "checked".
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
  hasAnyProducts(): boolean {
    return (this.products && this.products.length) ? true : false;
  }

}
