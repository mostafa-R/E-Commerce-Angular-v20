import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../service/category';
import { ProductService } from '../../service/productservices';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.html',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
})
export class InsertProductComponent implements OnInit {
  productForm!: FormGroup;
  categories: any[] = [];
  isEditMode = false;
  productId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      productQuantity: ['', Validators.required],
      categoryId: ['', Validators.required],
    });

    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });

    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      if (this.productId) {
        this.isEditMode = true;
        this.productService
          .getProductById(this.productId)
          .subscribe((product) => {
            this.productForm.patchValue(product);
          });
      }
    });
  }
  onSubmit() {
    if (this.productForm.valid) {
      const data = this.productForm.value;
      if (this.isEditMode) {
        this.productService
          .updateProduct(this.productId!, data)
          .subscribe(() => {
            this.router.navigate(['/products']);
          });
      } else {
        this.productService.addProduct(data).subscribe(() => {
          this.router.navigate(['/products']);
        });
      }
    }
  }
}
