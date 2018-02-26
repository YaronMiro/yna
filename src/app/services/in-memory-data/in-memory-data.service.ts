import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './../../types/product';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      new Product({id: 1, title: 'milk', isChecked: true, quantity: '2'}),
      new Product({id: 2, title: 'bread'})
    ];
    return {products};
  }
}
