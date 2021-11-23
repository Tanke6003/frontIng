import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'empleados',
        loadChildren: () => import('../empleados/empleados.module').then( m => m.EmpleadosPageModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('../productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('../clientes/clientes.module').then( m => m.ClientesPageModule)
      },
      {
        path: 'ventas',
        loadChildren: () => import('../ventas/ventas.module').then( m => m.VentasPageModule)
      },
      {
        path: 'proveedores',
        loadChildren: () => import('../proveedores/proveedores.module').then( m => m.ProveedoresPageModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('../pedidos/pedidos.module').then( m => m.PedidosPageModule)
      },
      {
        path: 'iva',
        loadChildren: () => import('../iva/iva.module').then( m => m.IvaPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
