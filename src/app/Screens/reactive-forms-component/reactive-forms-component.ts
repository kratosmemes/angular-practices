import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReactiveInputComponent } from '../../Components/reactive-input/reactive-input';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reactive-forms-component',
  imports: [CommonModule, ReactiveFormsModule, ReactiveInputComponent],
  templateUrl: './reactive-forms-component.html',
  styleUrls: ['./reactive-forms-component.scss']
})
export class ReactiveFormsComponent {
  private _snackBar = inject(MatSnackBar);

  form                      !: FormGroup;
  nombreControl             !: FormControl;
  edadControl               !: FormControl;
  apellidoPaternoControl    !: FormControl;
  apellidoMaternoControl    !: FormControl;

constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    nombre: ['', [
      Validators.required,
      //Validators.pattern(/^[a-zA-Z0-9\s]+$/),
      Validators.maxLength(5)
    ]],
    apellidoPaterno: ['', [
      Validators.required
    ]],
    apellidoMaterno: ['', [
      Validators.required
    ]],
    edad: ['', [
      Validators.required
    ]]  
  });

  this.nombreControl = this.form.get('nombre') as FormControl;
  this.apellidoPaternoControl = this.form.get('apellidoPaterno') as FormControl;
  this.apellidoMaternoControl = this.form.get('apellidoMaterno') as FormControl;
  this.edadControl = this.form.get('edad') as FormControl;
}

  onSubmit() {
    if (this.form.valid) {
      const raw = this.form.get('nombre')?.value;
      const clean = this.sanitizeInput(raw);
      console.log('Nombre limpio:', clean);
    } 
    
    if(this.nombreControl.errors?.['required']) {
      this._snackBar.open("Es necesario ingresar todos los campos para poder continuar", "", {  
        duration: 2000
      });    
    }
  }

  sanitizeInput(value: string): string {
    return value.trim().replace(/[^a-zA-Z0-9\s]/g, '');
  }
}
