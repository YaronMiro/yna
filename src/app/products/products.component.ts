import { Product } from './../types/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  private _title: string;

  newProduct: Product =
    {
      id: null,
      title: null,
      isChecked: false,
    };

  products: Product[] = [
    {
      id: 1,
      title: 'chips',
      isChecked: true,
    },
    {
      id: 2,
      title: 'cockie',
      isChecked: false,
    }
  ];

  constructor() {
    this._title = 'add your items here';
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
