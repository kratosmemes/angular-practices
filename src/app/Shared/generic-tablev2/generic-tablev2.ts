import { Component, Input, ChangeDetectorRef, OnChanges, SimpleChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-generic-tablev2',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './generic-tablev2.html',
  styleUrl: './generic-tablev2.scss',
  // ✅ Cambiar la estrategia de detección
  changeDetection: ChangeDetectionStrategy.Default
})
export class GenericTableV2 {

  constructor(private cdr: ChangeDetectorRef) {}

  @Input() 
  data: Array<Record<string, any>> = [];

  @Input()
  showBottomActions: boolean = false;

  @Input()
  buttons: Array<{ label: string, onClick: () => void }> = [];

  @Input()
  bottomDivActionsClasses: string[] = [];

  @Input()
  columns: Array<{ header: string, field: string }> = []
  
  @Input() onAddClick: () => void = () => {};
}