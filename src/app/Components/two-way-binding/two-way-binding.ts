import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule, MatFormField, MatInputModule],
  templateUrl: './two-way-binding.html',
  styleUrls: ['./two-way-binding.scss'],
})
export class TwoWayBinding {
  public inputValue: string = ''; 
  
  @Input()
  public classes: string[] = [];

  @Output()
  valueChanged = new EventEmitter<string>();

  onValueChange() {
    this.valueChanged.emit(this.inputValue);
  }
}
