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

  ngOnInit() {
  }

}
