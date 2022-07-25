import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Products | undefined;

  constructor(private route: ActivatedRoute, 
    private cartService: CartService) {}

    addToCart(product: Products){
      this.cartService.addToCart(product);
      window.alert('Product has been added to the cart!')
    }

  ngOnInit(): void {
    //take snapshot of parametr with current route
    const routeParams = this.route.snapshot.paramMap;

    //take out product id from paramtrs
    const productIdFromRoute = Number(routeParams.get('productId'));

    //find product with product id
    this.product = products.find(
      product => (product.id === productIdFromRoute)
    );
  }

}
