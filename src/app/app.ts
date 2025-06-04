import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Products } from './components/products/products';
import { Stores } from './components/store/store';
import { ProductParent } from "./components/product-parent/product-parent";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Products,
    Footer,
    Stores,
    ProductParent,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'E-Commerce';
}
