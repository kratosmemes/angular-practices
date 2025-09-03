import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-material-tests',
  imports: [
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './material-component.html',
  styleUrls: ['./material-component.scss']
})
export class MaterialComponent {

}
