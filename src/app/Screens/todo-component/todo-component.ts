import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-component',
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './todo-component.html',
  styleUrl: './todo-component.scss'
})
export class TodoComponent {

}
