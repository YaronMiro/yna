import { Product } from './../types/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  private _title: string;

  products: Product[] = [
    {
      id: 1,
      title: 'milk',
      isChecked: true,
      quantity: 1, price: '25 Nis',
      description: 'some text about product'
    },
    {
      id: 2,
      title: 'breed',
      isChecked: false,
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

  ngOnInit() {
  }

}
