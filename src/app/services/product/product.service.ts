import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


import { Product } from './../../types/product';
import { MessageService } from './../../services/message/message.service';


@Injectable()
export class ProductService {

  // The "last ID" so we can simulate
  // automatic incrementing of ID's.
  private lastId = 0;

   // URL to a web API.
  private productsUrl = '/api/products';

  // The products collection.
  private _products: Product[] = [];

  constructor( private messageService: MessageService, private http: HttpClient) { }

  // Log ProductService messages.
  private log(message: string) {
    this.messageService.add('ProductService: ' + message);
  }

 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // @TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // @TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Simulate GET /products from the server.
  get products(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(heroes => this.log(`fetched products`)),
      catchError(this.handleError('get products method', []))
    );
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
