import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from './proveedores.service';
import { Events }            from '../events';
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
  providers:[ProveedoresService]
})
export class ProveedoresPage implements OnInit {
  proveedores: Array<any>;
  busqueda : String;
  constructor( private _ProveedoresService: ProveedoresService, public events: Events) {
    this.getProveedores();
    this.events.clienteChange.subscribe(()=>{
      this.getProveedores();
    }); 
   }

  ngOnInit() {
  }
  getProveedores(){
    this._ProveedoresService.getProveedores().subscribe((res)=>{
      this.proveedores = res.vendors;
    },(error) =>{
      console.log(error);
    });
  }
  
  getProveedor(e){
    let data = { 
      id : e
    }

    this._ProveedoresService.getProveedor(data).subscribe((res)=>{
      console.log(res)
      this.proveedores = res.vendor;
      if(!this.busqueda)
        this.getProveedores();
    },(error) =>{
      console.log(error);
    });
  }

}
