import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EmpleadosPageRoutingModule } from './empleados-routing.module';
import { EmpleadosPage } from './empleados.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadosPageRoutingModule,
    NgxDatatableModule 
  ],
  declarations: [EmpleadosPage]
})
export class EmpleadosPageModule {}
