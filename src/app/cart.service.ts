import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Products[] = []
  constructor() { }

  addToCart(products: Products){
    this.items.push(products);
  }

  returnToCart(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
