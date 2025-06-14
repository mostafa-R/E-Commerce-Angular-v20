import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductCardDirective } from '../../directives/product-card';
import { IProducts } from '../../models/products';
import { CreditFormatPipe } from '../../Pipes/credit-format-pipe';
import { Service } from '../../service/service';
import { ProductsApi } from './../../service/products-api';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    FormsModule,
    ProductCardDirective,
    CurrencyPipe,
    CreditFormatPipe,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  ProductList!: IProducts[];

  isPurchased: boolean = false;
  clientName: string = 'ahmed';

  filteredProducts: IProducts[] = [];
  date: Date = new Date();
  creditNumber: string = '1234567812345678';

  constructor(
    private productFromService: Service,
    private ProductsApi: ProductsApi,
    private cdr: ChangeDetectorRef
  ) {
    // this.ProductList = [
    //   {
    //     productId: 1,
    //     productName: 'Apple iPhone 15',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 1,
    //     productPrice: 200,
    //     categoryId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 2,
    //     productName: 'Samsung Galaxy frontend ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 3,
    //     productPrice: 200,
    //     categoryId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 3,
    //     productName: 'Apple iPhone 13',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 0,
    //     productPrice: 200,
    //     categoryId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 4,
    //     productName: 'Samsung Galaxy ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 1,
    //     productPrice: 200,
    //     categoryId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 5,
    //     productName: 'OPPO Reno 12F 5G ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70093960V/45/_/1721457134/54d5b998-81c6-4fdd-9b0e-eca01f6979b7.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 6,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 7,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70085224V/45/_/1721894952/91270228-e30b-484e-ae2a-3e746b194bb2.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 3,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 8,
    //     productName: 'Reno 11F',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70063654V/45/_/1713704986/b06f55f9-03d1-4021-8b06-da23bc27e60d.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 9,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    // ];
    this.filteredProducts = this.productFromService.getProducts();
    // console.log(this.filteredProducts);

    this.ProductsApi.getProducts().subscribe({
      next: (data) => {
        this.filteredProducts = data;
        this.cdr.detectChanges();
        console.log(this.filteredProducts);
      },
      error: (error) => {
        console.log(error);
      },
    });
    console.log(this.filteredProducts);
  }

  buyProduct(product: IProducts) {
    if (product.productQuantity > 0) {
      product.productQuantity--;
      //product.isPurchased = true;
    }
  }

  @Input() set filterName(setValue: string) {
    this.filteredProducts = this.productFromService.doSearch(setValue);
  }

  @Output() productProperty: EventEmitter<IProducts> =
    new EventEmitter<IProducts>();
  addToCart(product: IProducts) {
    // console.log('Product added to cart:', product);
    this.productProperty.emit(product);
  }
}
