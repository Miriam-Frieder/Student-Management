import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  private products_:Product[] = [
    { id: 1, name: 'Product 1', price: 10 ,img:"../../img/candles.png" },
    { id: 2, name: 'Product 2', price: 20 ,img:"../../img/donut.png"},
    { id: 3, name: 'Product 3', price: 30 ,img:"../../img/heart.png"},
  ];
  get products():Product[] {
    return this.products_;
  }
  set products(products:Product[]){
    this.products_ = products;
  }

}
