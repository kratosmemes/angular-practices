import { Component } from '@angular/core';
import { GenericTable } from "../../Shared/generic-table/generic-table";
import { CdkNoDataRow } from "@angular/cdk/table";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tablas-component',
  imports: [GenericTable, FormsModule],
  templateUrl: './tablas-component.html',
  styleUrl: './tablas-component.scss'
})
export class TablasComponent {
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

  accionPersonalizada(row: any) {
    alert('Acción personalizada para ' + row.name);
  }
}
