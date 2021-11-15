import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesEmpleadoPage } from './detalles-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesEmpleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesEmpleadoPageRoutingModule {}
