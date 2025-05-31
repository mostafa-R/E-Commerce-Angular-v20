import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Products } from './components/products/products';
import { Stores } from './components/store/store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Products, Footer, Stores],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'E-Commerce';
}
