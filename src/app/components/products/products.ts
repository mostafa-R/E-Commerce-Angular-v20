import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductCardDirective } from '../../directives/product-card';
import { IProducts } from '../../models/products';
import { CreditFormatPipe } from '../../Pipes/credit-format-pipe';
import { Service } from '../../service/service';
import { ProductsApi } from './../../service/products-api';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductCardDirective,
    CurrencyPipe,
    CreditFormatPipe,
    RouterLink,
  ],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class Products implements OnInit {
  ProductList!: IProducts[];

  isPurchased: boolean = false;
  clientName: string = 'ahmed';

  filteredProducts: IProducts[] | undefined;
  date: Date = new Date();
  creditNumber: string = '1234567812345678';

  constructor(
    private productFromService: Service,
    private ProductsApi: ProductsApi,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.ProductsApi.getProducts().subscribe({
      next: (data) => {
        this.filteredProducts = data;
        console.log(this.filteredProducts);
        this.cdr.detectChanges();
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
    this.ProductsApi.getProducts().subscribe((data) => {
      let arrofdata = data.filter((prd) => {
        return prd.productName.toLowerCase().includes(setValue);
      });
      this.filteredProducts = arrofdata;
    });
  }

  @Output() productProperty: EventEmitter<IProducts> =
    new EventEmitter<IProducts>();

  addToCart(product: IProducts) {
    // console.log('Product added to cart:', product);
    this.productProperty.emit(product);
  }
}
