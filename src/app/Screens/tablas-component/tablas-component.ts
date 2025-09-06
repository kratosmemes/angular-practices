import { ChangeDetectorRef, Component } from '@angular/core';
import { GenericTable } from "../../Shared/generic-table/generic-table";
import { FormsModule } from '@angular/forms';
import { GenericTableV2 } from '../../Shared/generic-tablev2/generic-tablev2';

@Component({
  selector: 'app-tablas-component',
  imports: [GenericTable, GenericTableV2, FormsModule],
  templateUrl: './tablas-component.html',
  styleUrl: './tablas-component.scss'
})
export class TablasComponent {

constructor(private cdr: ChangeDetectorRef) {}

  dynamicButtons = [
    { label: 'Agregar',   onClick: () => alert("Agregar") },
    { label: 'Eliminar',  onClick: () => alert("Eliminar") },
    { label: 'Voton',     onClick: () => alert("Voton") },
  ];

  myColumns = [
    { header: 'Nombre',           field: 'name' },
    { header: 'Apellido Paterno', field: 'apellidoPaterno' },
    { header: 'Nuevo Nombre',     field: 'nuevoNombre' }
  ];

  myData: Array<Record<string, any>> = [
    {name: 'Angel', apellidoPaterno: 'Gonzalez'},
    {name: 'Pedro', apellidoPaterno: 'Samsulek'},
  ];

  /* SEGUNDA TABLA*/
  dynamicButtonsv2 = [
    { label: 'Agregar',   onClick: () => alert("Agregar") },
    { label: 'Eliminar',  onClick: () => alert("Eliminar") },
    { label: 'Voton',     onClick: () => alert("Voton") },
  ];

  myColumnsv2 = [
    { header: 'Nombre',           field: 'name' },
    { header: 'Apellido Paterno', field: 'apellidoPaterno' },
    { header: 'Acción',           field: 'accion' }
  ];

  myDatav2: Array<Record<string, any>> = [
    {name: 'Angel', apellidoPaterno: 'Gonzalez'},
    {name: 'Pedro', apellidoPaterno: 'Samsulek'},
  ];

  accionPersonalizada(row: any) {
    alert('Acción personalizada para ' + row.name);
  }

  accionDesdePadreNomames() {
      alert("Agregando nueva fila");
      
      try {
        // ✅ Verificación EXTRA segura
        if (!this.myData || !Array.isArray(this.myData)) {
          console.warn('myData no era array, reinicializando');
          this.myData = [];
        }
        
        if (!this.myDatav2 || !Array.isArray(this.myDatav2)) {
          console.warn('myDatav2 no era array, reinicializando');
          this.myDatav2 = [];
        }
        
        // ✅ Ahora sí usar spread
        this.myData = [...this.myData, {name: 'Nuevo', apellidoPaterno: 'Usuario'}];
        this.myDatav2 = [...this.myDatav2, {name: 'Nuevo', apellidoPaterno: 'Usuario'}];
        
      } catch (error) {
        console.error('Error crítico:', error);
        // ✅ Fallback absoluto
        this.myData = [{name: 'Nuevo', apellidoPaterno: 'Usuario'}];
        this.myDatav2 = [{name: 'Nuevo', apellidoPaterno: 'Usuario'}];
      }
      
      this.cdr.detectChanges();
    }
  }
