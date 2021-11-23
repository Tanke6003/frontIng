import { Component, OnInit } from '@angular/core';
import { ClienteService } from './clientes.service';
import { Events }            from '../events';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  providers:[ClienteService]
})
export class ClientesPage implements OnInit {
  clientes: Array<any>;
  busqueda : String;
  constructor( private _ClienteService: ClienteService, public events: Events) {
    this.getClientes();
    this.events.clienteChange.subscribe(()=>{
      this.getClientes();
    }); 
   }

  ngOnInit() {
  }
  getClientes(){
    this._ClienteService.getClientes().subscribe((res)=>{
      this.clientes = res.clients;
    },(error) =>{
      console.log(error);
    });
  }
  
  getCliente(e){
    let data = { 
      id : e
    }

    this._ClienteService.getCliente(data).subscribe((res)=>{
      console.log(res)
      this.clientes = res.client;
      if(!this.busqueda)
        this.getClientes();
    },(error) =>{
      console.log(error);
    });
  }

}
