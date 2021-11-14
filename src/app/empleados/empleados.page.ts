import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from './empleados.service';
import { Events }            from '../events';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
  providers:[EmpleadosService]
})
export class EmpleadosPage implements OnInit {
  empleados: Array<any>;

  rows = [
  ];
  columns = [{ name: 'Id' }, { name: 'Nombres' }, { name: 'Apellidos' },{ name: 'Puesto' },{ name: 'status' },{ name: 'direccion' },{ name: 'telefono' },{ prop: 'fecha' }];
  constructor( private _EmpleadosService: EmpleadosService,public events: Events) { 
    this.getEmpleados();
    this.events.noteChange.subscribe(()=>{
      this.getEmpleados();
    });  
  }

  ngOnInit() {
  }
  
  getEmpleados(){
    this._EmpleadosService.getEmpleados().subscribe((res)=>{
      this.empleados = res.employes;
      this.rows = this.empleados;
      console.log(this.empleados)
    },(error) =>{
      console.log(error);
    });
  }

}
