import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValueService } from '../../value';
import { MatFormField, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-two-way-binding-two',
  imports: [FormsModule, MatFormField, MatInputModule],
  templateUrl: './two-way-binding-two.html',
  styleUrls: ['./two-way-binding-two.scss'],
})
export class TwoWayBindingTwo {
  public inputValue: string = '';

  constructor(private valueService: ValueService){}

  onValueChange() {
    this.valueService.setInputValue(this.inputValue);
  }
}
