import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


import { Product } from './../../types/product';
import { MessageService } from './../../services/message/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

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
 * @param operation - name of the operation that failed.
 * @param result - optional value to return as the observable result.
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // @TODO: send the error to remote logging infrastructure.
      console.error(error);

      // @TODO: better job of transforming error for user consumption.
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Simulate GET /products from the server.
  get products(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(products => this.log(`Fetched products`)),
      catchError(this.handleError('Get products from server', []))
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
  add(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(
      tap((newProduct: Product) => this.log(`Added product with id=${newProduct.id}`)),
      catchError(this.handleError<Product>('Add product'))
    );
  }

  // Simulate GET /product/:id
  get(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`Fetched product id=${id}`)),
      catchError(this.handleError<Product>(`Get product id=${id}`))
    );
  }

  // Simulate DELETE /product/:id
  delete(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => this.log(`Deleted product id=${id}`)),
      catchError(this.handleError<Product>('Deleted Product'))
    );
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
