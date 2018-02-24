import { Product } from './../types/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  private _title: string;

  private _addItemTitle: string;

  newProduct: Product =
    {
      id: null,
      title: null,
      isChecked: false,
    };

  products: Product[] = [
    {
      id: 1,
      title: 'milk',
      isChecked: false,
      quantity: 1, price: '25 Nis',
      description: 'some text about product'
    },
    {
      id: 2,
      title: 'bread',
      isChecked: true,
      quantity: 2
    }
  ];

  constructor() {
    this._title = 'add your item here';
    this._addItemTitle = 'add item';
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
   * Get the "add item" title text.
   *
   * @return string
   */
  get addItemTitle(): string {
    return this._addItemTitle;
  }

  /**
   * Set the "add item" title text.
   *
   * @param title: the add item title.
   * @return void
   */
  set addItemTitle(title: string) {
    this._addItemTitle = title;
  }

  /**
  * Delete product from the list.
  *
  * @param id: the product ID.
  * @return void
  */
  delete(id: number): void {
    this.products = this.products.filter(
      (product) => product.id !== id
    );
  }

  /**
  * Delete product from the list.
  *
  * @param id: the product ID.
  * @return void
  */
  add(item: Product): void {

    const newProduct: Product = {
      id: 3,
      title: item.title,
      isChecked: false,
    };

    this.products.push(newProduct);
    // reset the "Add item" title.

    this.newProduct = {
      id: null,
      title: null,
      isChecked: false,
    };

    this.addItemTitle = 'Add item';

  }

  ngOnInit() {
  }

}
