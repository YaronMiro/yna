import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './../../types/product';

export class InMemoryDataService implements InMemoryDbService {

  // Overriding the default "genId" method,
  // This method does not add a dynamic ID on request
  // when their are no entities in the DB.
  // Return the max number of ids plus one (+1)
  // if they exists or the initial number (1) if it does not.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  }

  createDb() {
    // The initial DB entitie.
    const products = [
      new Product({id: 1, title: 'milk', isChecked: true, quantity: '2'}),
      new Product({id: 2, title: 'bread'}),
      new Product({id: 3, title: 'Cheerios'})
    ];

    return {products};
  }
}
