import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../Services/user-service';
import { MatTableModule } from '@angular/material/table';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [MatTableModule, NgClass],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})
export class UsersListComponent {
  users: User[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.isLoading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      }
    });
  }

  displayedColumns: string[] = ['id', 'nombre', 'email']

  shouldGrayOut(row: any): boolean {
    //return row.email.includes('test');
    return !row.isActive;
  }
}