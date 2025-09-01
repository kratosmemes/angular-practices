import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValueService } from '../value';

@Component({
  selector: 'app-two-way-binding-two',
  imports: [FormsModule],
  templateUrl: './two-way-binding-two.html',
  styleUrl: './two-way-binding-two.css',
})
export class TwoWayBindingTwo {
  public inputValue: string = '';

  constructor(private valueService: ValueService){}

  onValueChange() {
    this.valueService.setInputValue(this.inputValue);
  }
}
