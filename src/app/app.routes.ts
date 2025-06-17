import { Routes } from '@angular/router';
import { AboutUs } from './components/about-us/about-us';
import { DetailsComponent } from './components/details/details';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { ProductParent } from './components/product-parent/product-parent';
import { UserRegister } from './components/user-register/user-register';
import { AdminComponent } from './components/admin/admin';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { InsertProductComponent } from './components/insert-product/insert-product';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: Home },

  { path: 'about', component: AboutUs },

  { path: 'products', component: ProductParent, canActivate: [authGuard] },
  { path: 'insertproduct', component: InsertProductComponent },
  {
    path: 'insertproduct/:id',
    component: InsertProductComponent
  },
  { path: 'admin/signup', component: AdminComponent },
  { path: 'register', component: UserRegister, title: 'new user' },
  { path: 'login', component: Login },
  { path: 'product/:id', component: DetailsComponent },

  { path: '**', component: NotFound },
];
