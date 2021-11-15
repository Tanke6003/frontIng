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
  busqueda : String;
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
    },(error) =>{
      console.log(error);
    });
  }
  getEmpleado(e){
    let data = { 
      id : e
    }

    this._EmpleadosService.getEmpleado(data).subscribe((res)=>{
      console.log(res)
      this.empleados = res.employe;
      e = res.employe;
      if(!this.busqueda)
        this.getEmpleados();
    },(error) =>{
      console.log(error);
    });
  }

}
