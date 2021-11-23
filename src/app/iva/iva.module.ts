import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IvaPageRoutingModule } from './iva-routing.module';

import { IvaPage } from './iva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IvaPageRoutingModule
  ],
  declarations: [IvaPage]
})
export class IvaPageModule {}
