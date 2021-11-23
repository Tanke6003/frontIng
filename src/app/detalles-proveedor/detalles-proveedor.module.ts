import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesProveedorPageRoutingModule } from './detalles-proveedor-routing.module';

import { DetallesProveedorPage } from './detalles-proveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesProveedorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetallesProveedorPage]
})
export class DetallesProveedorPageModule {}
