import { Component } from '@angular/core';
import { TwoWayBinding } from '../../Components/two-way-binding/two-way-binding';
import { TwoWayBindingTwo } from '../../Components/two-way-binding-two/two-way-binding-two';
import { Observable } from 'rxjs';
import { ValueService } from '../../value';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-forms-component.html',
  imports: [
    TwoWayBinding,
    TwoWayBindingTwo,
    AsyncPipe
  ],
  templateUrl: './forms-component.html',
  styleUrl: './forms-component.css'
})
export class FormsComponent {
  inputValue: string = '';

  onValueChanged(newValue: string) {
    this.inputValue = newValue;
  }

  inputValue$: Observable<string>;

  constructor(private valueService: ValueService) {
    this.inputValue$ = this.valueService.inputValue$;
  }
}
