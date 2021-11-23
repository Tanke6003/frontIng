import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarProveedorPageRoutingModule } from './agregar-proveedor-routing.module';
import { AgregarProveedorPage } from './agregar-proveedor.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarProveedorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarProveedorPage]
})
export class AgregarProveedorPageModule {}
