import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProveedoresPageRoutingModule } from './proveedores-routing.module';
import { ProveedoresPage } from './proveedores.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProveedoresPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [ProveedoresPage]
})
export class ProveedoresPageModule {}
