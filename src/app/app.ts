import { Component, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { TwoWayBindingTwo } from './two-way-binding-two/two-way-binding-two';
import { Observable } from 'rxjs';
import { ValueService } from './value';
import { AsyncPipe } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [
    TwoWayBinding,
    TwoWayBindingTwo,
    AsyncPipe,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-tests');
  inputValue: string = '';

  onValueChanged(newValue: string) {
    this.inputValue = newValue;
  }

  inputValue$: Observable<string>;

  constructor(private valueService: ValueService) {
    this.inputValue$ = this.valueService.inputValue$;
  }
}
