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
    path: 'crear-venta',
    loadChildren: () => import('./crear-venta/crear-venta.module').then( m => m.CrearVentaPageModule)
  },
  {
    path: 'detalles-venta',
    loadChildren: () => import('./detalles-venta/detalles-venta.module').then( m => m.DetallesVentaPageModule)
  },
  {
    path: 'detalles-empleado',
    loadChildren: () => import('./detalles-empleado/detalles-empleado.module').then( m => m.DetallesEmpleadoPageModule)
  },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
