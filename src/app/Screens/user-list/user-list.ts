import { Component } from '@angular/core';
import { UserData } from '../../Models/user-data.model';
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
  users: UserData[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.isLoading = true;
    this.userService.getUsers().subscribe({
      next: (response) => {
        console.log(response);
        this.users = response.data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      }
    });
  }

  displayedColumns: string[] = ['Nombre', 'ApellidoPaterno', 'ApellidoMaterno', 'Edad', 'isActivo'];

  shouldGrayOut(row: UserData): boolean {
    return !row.isActivo;
  }
}