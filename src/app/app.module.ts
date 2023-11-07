import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

//Para trabajar con tablas de material

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

//Para trcontroles de formulario material

import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import { MomentDateModule } from '@angular/material-moment-adapter';

//Para trabajar con mensajes de alerta

import {MatSnackBarModule} from '@angular/material/snack-bar'

//Para trabajar con icones de material

import { MatIconModule} from '@angular/material/icon'

//Para trabajar con modalesde material

import {MatDialogModule} from '@angular/material/dialog'

//Para trabajar con cuadriculas

import {MatGridListModule} from '@angular/material/grid-list';
import { DialogAddEditComponent } from './Dialogs/dialog-add-edit/dialog-add-edit.component';
import { DialogoDeleteComponent } from './Dialogs/dialogo-delete/dialogo-delete.component'



@NgModule({
  declarations: [
    AppComponent,
    DialogAddEditComponent,
    DialogoDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule ,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MomentDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatGridListModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
