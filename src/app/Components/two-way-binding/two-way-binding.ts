import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrls: ['./two-way-binding.scss'],
})
export class TwoWayBinding {
  public inputValue: string = '';

  @Output()
  valueChanged = new EventEmitter<string>();

  onValueChange() {
    this.valueChanged.emit(this.inputValue);
  }
}
