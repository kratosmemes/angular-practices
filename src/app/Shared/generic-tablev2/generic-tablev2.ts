import { Component, Input, ChangeDetectorRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
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
export class GenericTableV2 implements OnChanges {

  constructor(private cdr: ChangeDetectorRef) {}

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
  onAddClick: () => void = () => {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('🔄 Cambios detectados en hijo:', changes);
    
    // ✅ Forzar la detección de cambios de manera más agresiva
    if (changes['data']) {
      setTimeout(() => {
        this.cdr.detectChanges();
      });
    }
  }
}