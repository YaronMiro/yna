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
    this.productService.update(this.product).subscribe();
  }

  ngOnInit() { }

}
