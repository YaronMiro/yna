import { Injectable } from '@angular/core';

import { Product } from './../../types/product';

@Injectable()
export class ProductService {

  // The "last ID" so we can simulate
  // automatic incrementing of ID's.
  private lastId = 0;

  // The products collection.
  private _products: Product[] = [
    new Product({ id: 1, title: 'breed' }),
    new Product({ id: 2, title: 'milk', isChecked: true })
  ];

  // Simulate GET /todos
  get products(): Product[] {
    return this._products;
  }

  // Simulate POST /todos
  add(product: Product): ProductService {
    product.id = product.id ? product.id : ++this.lastId;
    this._products.push(new Product(product));
    return this;
  }

  // Simulate DELETE /todos/:id
  delete(id: number): ProductService {
    // this._products = this._products.filter(
    //   (product) => product.id !== id
    // );
    console.log(this._products);
    return this;
  }

  constructor() { }

}
