import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetallesEmpleadoPageRoutingModule } from './detalles-empleado-routing.module';
import { DetallesEmpleadoPage } from './detalles-empleado.page';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesEmpleadoPageRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [DetallesEmpleadoPage]
})
export class DetallesEmpleadoPageModule {}
