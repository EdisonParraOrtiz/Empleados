import { Component, OnInit, Inject } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from  '@angular/material/dialog';

import {MatSnackBar} from '@angular/material/snack-bar';

import {MAT_DATE_FORMATS} from '@angular/material/core';
import * as moment from 'moment';

import { Departamento } from 'src/app/interfaces/departamento';
import { Empleado } from 'src/app/interfaces/empleado';
import { DepartamentoService } from 'src/app/Services/departamento.service';
import { EmpleadoService } from 'src/app/Services/empleado.service';


export const MY_DATE_FORMATS = {

  parse: {
    dateinput: 'DD/MM/YYYY',
  },
  display: {
    dateinput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMMYYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMMYYYY',
  }
}


@Component({
  selector: 'app-dialog-add-edit',
  templateUrl: './dialog-add-edit.component.html',
  styleUrls: ['./dialog-add-edit.component.css'],
  providers:[
    {provide:'MAT_DATE_FORMATS', useValue: 'MY_DATE_FORMATS'},
  ]
})
export class DialogAddEditComponent implements  OnInit {
  
  formEmpleado: FormGroup;
  tituloAccion:string="Nuevo";
  botonAccion:string="Guardar";
  listaDepartamentos:Departamento[]=[];
  constructor(
    private dialogoReferencia: MatDialogRef<DialogAddEditComponent>,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _departamentoServicio: DepartamentoService,
    private _empleadoServicio: EmpleadoService,

    @Inject (MAT_DIALOG_DATA) public dataEmpleado:Empleado
    

  )
  {

  this.formEmpleado =this.fb.group({
    nombreCompleto:['',Validators.required],
    idDepartamento:['',Validators.required],
    sueldo:['',Validators.required],
    fechaDeContrato:['',Validators.required],

  })

  this. _departamentoServicio.getList().subscribe({
    
    next:(data) => {
      this.listaDepartamentos = data;
    }, error: (e)=>{}
  })

}

MostrarAlerta(msg: string, accion: string){
  this._snackBar.open(msg, accion,{
    horizontalPosition:"end",
    verticalPosition: "top",
    duration: 3000

}
)

}

addEditEmpleado(){

  console.log(this.formEmpleado.value)

  const modelo:Empleado ={
    idEmpleado: 0,
    nombreCompleto:this.formEmpleado.value.nombreCompleto,
    idDepartamento: this.formEmpleado.value.idDepartamento,
    sueldo:this.formEmpleado.value.sueldo,
    FechaDeContrato:moment(this.formEmpleado.value.FechaDeContrato).format("DD/MM/YYYY"),

  }

  if(this.dataEmpleado == null){

    this._empleadoServicio.add(modelo).subscribe({
      next:(data) => {
        this.MostrarAlerta("Empleado fue creado", "Listo");
        this.dialogoReferencia.close("creado");
    }, error:(e)=>{
      this.MostrarAlerta("No se puedo crear", "Error");
    }
  })

  } else{

    this._empleadoServicio.update(this.dataEmpleado.idEmpleado, modelo).subscribe({
      next:(data) => {
        this.MostrarAlerta("Empleado fue editado", "Listo");
        this.dialogoReferencia.close("editado");
    }, error:(e)=>{
      this.MostrarAlerta("No se puedo editarr", "Error");
    }
  })
  


}

}
ngOnInit(): void {
  
 if(this.dataEmpleado){

  this.formEmpleado.patchValue({
    nombreCompleto:this.dataEmpleado.nombreCompleto,
    idDepartamento: this.dataEmpleado.idDepartamento,
    sueldo:this.dataEmpleado.sueldo,
    FechaDeContrato:moment(this.dataEmpleado.FechaDeContrato,"DD/MM/YYYY"),

  })

  this.tituloAccion = "Editar";
  this.botonAccion =  "Actualizar";


 }

}


}
