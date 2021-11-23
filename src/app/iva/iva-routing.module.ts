import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IvaPage } from './iva.page';

const routes: Routes = [
  {
    path: '',
    component: IvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IvaPageRoutingModule {}
