import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-input',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './reactive-input.html',
  styleUrls: ['./reactive-input.scss']
})
export class ReactiveInputComponent {
  @Input() control!: FormControl;
  @Input() label: string = '';
}
