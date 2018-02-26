import { Injectable } from '@angular/core';

import { Product } from './../../types/product';

@Injectable()
export class ProductService {

  // The "last ID" so we can simulate
  // automatic incrementing of ID's.
  private lastId = 0;

  // The products collection.
  private _products: Product[] = [];

  constructor() { }

  // Simulate GET /product.
  get products(): Product[] {
    return this._products;
  }

  // Toggle checked status.
  toggleCheckedStatus(product: Product): Product {
    const updatedProduct = this.update(product.id, {
      isChecked: !product.isChecked
    });
    return updatedProduct;
  }

  // Simulate POST /product.
  add(product: Product): ProductService {
    product.id = product.id ? product.id : ++this.lastId;
    this._products.push(new Product(product));
    return this;
  }

  // Simulate GET /product/:id
  get(id: number): Product {
    return this._products
      .filter((product) => product.id === id)
      .pop();
  }

  // Simulate DELETE /product/:id
  delete(id: number): ProductService {
    const product = this.get(id);
    this._products.splice(this._products.indexOf(product), 1);
    return this;
  }

  // Simulate PUT /product/:id
  update(id: number, values: Object = {}): Product {
    const product = this.get(id);
    if (!product) {
      return null;
    }
    Object.assign(product, values);
    return product;
  }

  // Sinitize any given string.
  // making sure the string is valid.
  sinitizeString(value: string): string | null {
    const cleanValue = value.trim();
    return cleanValue.length ? cleanValue : null;
  }

}
