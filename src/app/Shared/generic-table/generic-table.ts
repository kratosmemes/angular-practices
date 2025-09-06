import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, input, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-table.html',
  styleUrl: './generic-table.scss'
})
export class GenericTable {

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

  @Input()
  cellTemplates: { [key: string]: TemplateRef<any> } = {};
}
