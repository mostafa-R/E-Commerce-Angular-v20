import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProducts } from '../../models/products';
import { Products } from '../products/products';

@Component({
  selector: 'app-product-parent',
  imports: [FormsModule, Products, CurrencyPipe],
  templateUrl: './product-parent.html',
  styleUrl: './product-parent.css',
})
export class ProductParent {
  filterName: string = '';

  productsListInParent: IProducts[] = [];
  addToCart(product: IProducts) {
    let isExist = this.productsListInParent.find(
      (item) => item.productId === product.productId
    );
    if (isExist) {
      isExist.productQuantity++;
    } else {
      this.productsListInParent.push({ ...product, productQuantity: 1 });
    }
    const totalPrice = this.productsListInParent.reduce((acc, item) => {
      return acc + item.productPrice * item.productQuantity;
    }, 0);

    // console.log('Total price:', totalPrice);
    // console.log(this.productsListInParent);
  }
}
