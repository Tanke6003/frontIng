import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import { Events }            from '../events';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  providers:[ProductosService]
})
export class ProductosPage implements OnInit {
  productos: Array<any>;
  busqueda : String;
  constructor( private _ProductosService: ProductosService,public events: Events) { 
    this.getProductos();
    this.events.productoChange.subscribe(()=>{
      this.getProductos();
    });  
  }

  ngOnInit() {
  }
  
  getProductos(){
    this._ProductosService.getProductos().subscribe((res)=>{
      this.productos = res.catalogue;
    },(error) =>{
      console.log(error);
    });
  }
  
  getProducto(e){
    let data = { 
      id : e
    }
    this._ProductosService.getProducto(data).subscribe((res)=>{
      this.productos = res.product;
      if(!this.busqueda)
        this.getProductos();
    },(error) =>{
      console.log(error);
    });
  }
}
