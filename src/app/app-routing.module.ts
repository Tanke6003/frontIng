import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'agregar-empleado',
    loadChildren: () => import('./agregar-empleado/agregar-empleado.module').then( m => m.AgregarEmpleadoPageModule)
  },
  {
    path: 'agregar-producto',
    loadChildren: () => import('./agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
  {
    path: 'agregar-cliente',
    loadChildren: () => import('./agregar-cliente/agregar-cliente.module').then( m => m.AgregarClientePageModule)
  },
  {
    path: 'detalles-venta',
    loadChildren: () => import('./detalles-venta/detalles-venta.module').then( m => m.DetallesVentaPageModule)
  },
  {
    path: 'detalles-empleado/:id',
    loadChildren: () => import('./detalles-empleado/detalles-empleado.module').then( m => m.DetallesEmpleadoPageModule)
  },
  {
    path: 'agregar-proveedor',
    loadChildren: () => import('./agregar-proveedor/agregar-proveedor.module').then( m => m.AgregarProveedorPageModule)
  },
  {
    path: 'nueva-venta',
    loadChildren: () => import('./nueva-venta/nueva-venta.module').then( m => m.NuevaVentaPageModule)
  },
  {
    path: 'nuevo-pedido',
    loadChildren: () => import('./nuevo-pedido/nuevo-pedido.module').then( m => m.NuevoPedidoPageModule)
  },
  {
    path: 'detalles-cliente/:id',
    loadChildren: () => import('./detalles-cliente/detalles-cliente.module').then( m => m.DetallesClientePageModule)
  },
  {
    path: 'detalles-proveedor',
    loadChildren: () => import('./detalles-proveedor/detalles-proveedor.module').then( m => m.DetallesProveedorPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
