import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesEmpleadoPageRoutingModule } from './detalles-empleado-routing.module';

import { DetallesEmpleadoPage } from './detalles-empleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesEmpleadoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetallesEmpleadoPage]
})
export class DetallesEmpleadoPageModule {}
