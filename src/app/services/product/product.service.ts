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

  constructor(private messageService: MessageService, private http: HttpClient) { }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    console.log('from debounce: ', term);
    return of([]);
    // return this.http.get<Product[]>(`api/products/?title=${term}`).pipe(
    //   tap(_ => this.log(`found heroes matching "${term}"`)),
    //   catchError(this.handleError<Product[]>('searchHeroes', []))
    // );
  }

  // Simulate GET /products from the server.
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap(products => this.log(`Fetched products`)),
      catchError(this.handleError('Get products from server', []))
    );
  }

  // Simulate POST /product.
  add(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(
      tap((newProduct: Product) => this.log(`Added product with id=${newProduct.id}`)),
      catchError(this.handleError<Product>('Add product failed'))
    );
  }

  // Simulate GET /product/:id
  get(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`Fetched product id=${id}`)),
      catchError(this.handleError<Product>(`Get product id=${id} failed`))
    );
  }

  // Simulate DELETE /product/:id
  delete(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => this.log(`Deleted product id=${id}`)),
      catchError(this.handleError<Product>('Deleted Product failed'))
    );
  }

  // Simulate PUT /product/:id
  update(product: Product): Observable<any> {
    return this.http.put(this.productsUrl, product, httpOptions).pipe(
      tap(_ => this.log(`updated product id=${product.id}`)),
      catchError(this.handleError<any>('Updated product failed'))
    );
  }

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
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // @TODO: send the error to remote logging infrastructure.
      console.error(error);

      // @TODO: better job of transforming error for user consumption.
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
