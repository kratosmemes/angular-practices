import { Component, Input, ChangeDetectorRef, OnChanges, SimpleChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generic-tablev3',
  standalone: true,
  imports: [CommonModule, MatIcon, FormsModule],
  templateUrl: './generic-tablev3.html',
  styleUrl: './generic-tablev3.scss',
  // ✅ Cambiar la estrategia de detección
  changeDetection: ChangeDetectionStrategy.Default
})
export class GenericTableV3 {

  constructor(private cdr: ChangeDetectorRef) {}

  @Input() 
  data: Array<Record<string, any>> = [];

  @Output()
  addRow = new EventEmitter<Record<string, any>>();

  newName: string = '';
  newApellido: string = '';

  onAddClick() {
    const newRow = {'name': this.newName, 'apellidoPaterno': this.newApellido};
    this.addRow.emit(newRow);

    this.newName = '';
    this.newApellido = '';
  }

  @Input()
  showBottomActions: boolean = false;

  @Input()
  buttons: Array<{ label: string, onClick: () => void }> = [];

  @Input()
  bottomDivActionsClasses: string[] = [];

  @Input()
  columns: Array<{ header: string, field: string }> = []
}