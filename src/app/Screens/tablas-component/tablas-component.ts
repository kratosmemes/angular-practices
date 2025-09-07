import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GenericTable } from "../../Shared/generic-table/generic-table";
import { FormsModule } from '@angular/forms';
import { GenericTableV2 } from '../../Shared/generic-tablev2/generic-tablev2';
import { GenericTableV3 } from '../../Shared/generic-tablev3/generic-tablev3';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tablas-component',
  imports: [GenericTable, GenericTableV2, GenericTableV3, FormsModule, JsonPipe],
  templateUrl: './tablas-component.html',
  styleUrl: './tablas-component.scss'
})
export class TablasComponent implements OnInit{

  constructor(private cdr: ChangeDetectorRef) {
    /* Esto es lo mismo que agregarle la propiedad en la funcion para que mantenga el contexto de aquí */
    /* Solo que esta manera es mas old school, funciona igualito pero ya es old */
    /* accionDesdePadre = (): void => {} <- Esto es lo nuevo | Lo de abajo es lo old*/
    this.accionDesdePadre = this.accionDesdePadre.bind(this);
  }

  ngOnInit(): void {

  }

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


  myColumnsv3 = [
    { header: 'Nombre',           field: 'name' },
    { header: 'Apellido Paterno', field: 'apellidoPaterno' },
    { header: 'Acción',           field: 'accion' }
  ];

  myDatav3: Array<Record<string, any>> = [
    {name: 'Angel', apellidoPaterno: 'Gonzalez'},
    {name: 'Pedro', apellidoPaterno: 'Samsulek'},
  ];

  accionPersonalizada(row: any) {
    alert('Acción personalizada para ' + row.name);
  }

  accionDesdePadre = (): void => {
    this.myDatav2.push({ name: 'Nuevo', apellidoPaterno: 'Nuevo Apellido' });
  }

  onAddRow(newRow: Record<string, any>) {
    this.myDatav3.push(newRow);
    console.log("Fila a guardar: ", newRow);
    console.log("Datos actuales: ", this.myDatav3);
  }
}
