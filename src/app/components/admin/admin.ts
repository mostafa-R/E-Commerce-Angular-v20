import { Component } from '@angular/core';
import { UserService, User } from '../../service/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.html',
  imports: [FormsModule, CommonModule],
})
export class AdminComponent {
  user: User = {
    fullName: '',
    email: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  addUser() {
    this.userService.addUser(this.user).subscribe({
      next: () => this.router.navigate(['/products']),
      error: (err) => console.error('Error adding user:', err),
    });
  }
}
