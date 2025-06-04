import { Routes } from '@angular/router';
import { AboutUs } from './components/about-us/about-us';
import { DetailsComponent } from './components/details/details';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { ProductParent } from './components/product-parent/product-parent';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: Home },

  { path: 'about', component: AboutUs },

  { path: 'products', component: ProductParent },

  { path: 'product/:id', component: DetailsComponent },

  { path: '**', component: NotFound },
];
