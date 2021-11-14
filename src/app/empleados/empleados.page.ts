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
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
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
      console.log(this.empleados)
    },(error) =>{
      console.log(error);
    });
  }

}
