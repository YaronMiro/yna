import { Product } from './../types/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  private _title: string;

  private _selectedProductId: number | null;

  newProduct: Product;

  products: Product[];

  constructor() {
    this._title = 'add your items here';
    this.products = [];
    this._selectedProductId = 1;
    this.newProduct = {
      id: null,
      title: null,
      isChecked: false,
    };
  }

  /**
   * Get the products component title.
   *
   * @return string
   */
  get title(): string {
    return this._title;
  }

  /**
   * Get the selected product ID.
   *
   * @return number | null
   */
  get selectedProductId(): number | null {
    return this._selectedProductId;
  }

  /**
   * Set the selected product ID.
   *
   * @param id number | null
   */
  set selectedProductId(id: number | null) {
    this._selectedProductId = id;
  }

  /**
  * Toggle the product "checked" status.
  *
  * @param product: the product data fields.
  * @return void
  */
  toggleCheckedStatus(product: Product): void {}

  /**
  * Delete product from the list.
  *
  * @param id: the product ID.
  * @return void
  */
  delete(id: number): void {}

  /**
  * Add product to the list.
  *
  * @param product: the product data fields.
  * @return void
  */
  add(product: Product): void {}

  ngOnInit() {
  }

}
