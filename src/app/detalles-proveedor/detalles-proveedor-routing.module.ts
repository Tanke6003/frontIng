import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesProveedorPage } from './detalles-proveedor.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesProveedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesProveedorPageRoutingModule {}
