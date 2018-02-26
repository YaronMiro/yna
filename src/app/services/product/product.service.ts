import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product } from './../../types/product';
import { MessageService } from './../../services/message/message.service';


@Injectable()
export class ProductService {

  // The "last ID" so we can simulate
  // automatic incrementing of ID's.
  private lastId = 0;

  // The products collection.
  private _products: Product[] = [
    new Product({id: 1, title: 'test me'}),
    new Product({id: 2, title: 'test me-2'}),
  ];

  constructor(private messageService: MessageService) { }

  // Simulate GET /product.
  get products(): Observable<Product[]> {
    this.messageService.add('ProductService: fetched products');
    return of (this._products);
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
  // get(id: number): Product {
  //   return this._products
  //     .filter((product) => product.id === id)
  //     .pop();
  // }

  // Simulate GET /product/:id
  get(id: number): Observable<Product> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`ProductService: fetched product id=${id}`);
    return of(this._products.find(product => product.id === id));
  }

  // Simulate DELETE /product/:id
  delete(id: number): ProductService {
    // REMOVE THIS!!
    const product = new Product({title: 'REMOVE ME REFACOR!!', id: 100});
    this._products.splice(this._products.indexOf(product), 1);
    return this;
  }

  // Simulate PUT /product/:id
  update(id: number, values: Object = {}): Product {
    // REMOVE THIS!!
    const product = new Product({title: 'REMOVE ME REFACOR!!', id: 100});
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
