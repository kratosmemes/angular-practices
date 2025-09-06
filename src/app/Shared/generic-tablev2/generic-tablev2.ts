import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, input, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-generic-tablev2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-tablev2.html',
  styleUrl: './generic-tablev2.scss'
})
export class GenericTableV2 {

  @Input()
  showBottomActions = true;

  @Input()
  buttons: Array<{ label: string, onClick: () => void }> = [];

  @Input()
  bottomDivActionsClasses: string[] = [];

  @Input()
  columns: Array<{ header: string, field: string }> = [];

  @Input()
  data: Array<Record<string, any>> = [];
}
