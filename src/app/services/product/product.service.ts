import { Injectable } from '@angular/core';

import { Product } from './../../types/product';

@Injectable()
export class ProductService {

  // The "last ID" so we can simulate
  // automatic incrementing of ID's.
  private lastId = 0;

  // The products collection.
  private _products: Product[] = [];

  // Simulate GET /product.
  get products(): Product[] {
    return this._products;
  }

  // Toggle checked status.
  toggleCheckedStatus(product: Product): Product {
    const updatedProduct = this.updateProduct(product.id, {
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
  getProduct(id: number): Product {
    return this._products
      .filter((product) => product.id === id)
      .pop();
  }

  // Simulate DELETE /product/:id
  delete(id: number): ProductService {
    this._products = this._products
      .filter((product) => product.id !== id);
    return this;
  }

  // Simulate PUT /product/:id
  updateProduct(id: number, values: Object = {}): Product {
    const product = this.getProduct(id);
    if (!product) {
      return null;
    }
    Object.assign(product, values);
    return product;
  }

  constructor() { }

}
