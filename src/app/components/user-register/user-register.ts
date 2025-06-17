import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Iuser } from '../../models/iuser';
import { UserRestful } from './../../service/user-restful';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-register.html',
  styleUrl: './user-register.css',
})
export class UserRegister {
  user: Iuser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    mobiles: [''],
  };
  trackByIndex(index: number, item: any): number {
    return index;
  }

  constructor(private userApi: UserRestful, private router: Router) {}

  addMobile() {
    this.user.mobiles.push('');
  }

  removeMobile(index: number) {
    this.user.mobiles.splice(index, 1);
  }

  addNewUser() {
    this.userApi.addNewUser(this.user).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/products']);
    });
  }
}
