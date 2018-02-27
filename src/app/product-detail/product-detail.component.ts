import { Component, OnInit, Input } from '@angular/core';

import { Product } from './../types/product';
import { ProductService } from './../services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService) { }

  // Update product.
  update(): void {
  /* @TODO [Preformence]
   * Change update of procut title to use "Observable" and "debounceTime"
   * reduce request to the server on every key stroke, send request
   * only when the user actually stpoed typing or just add a "save"
   * button instead.
  */
    this.productService.update(this.product).subscribe();
  }

  ngOnInit() { }

}
