import { Component } from '@angular/core';
import { TwoWayBinding } from '../../Components/two-way-binding/two-way-binding';
import { TwoWayBindingTwo } from '../../Components/two-way-binding-two/two-way-binding-two';
import { Observable } from 'rxjs';
import { ValueService } from '../../value';
import { AsyncPipe } from '@angular/common';
import { MatCard, MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-forms-component.html',
  imports: [
    TwoWayBinding,
    TwoWayBindingTwo,
    AsyncPipe,
    MatCard,
    MatCardModule
],
  templateUrl: './forms-component.html',
  styleUrls: ['./forms-component.scss']
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
