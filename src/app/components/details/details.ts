import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IProducts } from '../../models/products';
import { Service } from '../../service/service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
})
export class DetailsComponent implements OnInit {
  // productId!: number;
  // product: any;

  ProductD: number = 0;
  currentIndex: number = 0;
  productIds: number[] = [];
  singleproduct: IProducts | undefined;

  constructor(
    private router: Router,
    private productFromService: Service,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productIds = this.productFromService
      .getProducts()
      .map((item) => item.productId);

    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (isNaN(id)) {
        this.router.navigate(['**']);
        return;
      }

      this.ProductD = id;
      this.currentIndex = this.productIds.indexOf(this.ProductD);
      this.singleproduct = this.productFromService.getProductByID(
        this.ProductD
      );

      if (!this.singleproduct) {
        this.router.navigate(['**']);
      }
    });
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.router.navigate(['product', this.productIds[this.currentIndex - 1]]);
    }
  }

  next(): void {
    if (this.currentIndex < this.productIds.length - 1) {
      this.router.navigate(['product', this.productIds[this.currentIndex + 1]]);
    }
  }
}
