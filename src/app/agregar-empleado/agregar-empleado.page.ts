import { Component, OnInit } from '@angular/core';
import { AlertController }   from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AgregarEmpleadoService } from './agregar-empleado.service';
@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.page.html',
  styleUrls: ['./agregar-empleado.page.scss'],
  providers:[ AgregarEmpleadoService],
})
export class AgregarEmpleadoPage implements OnInit {
  AgregarEmpleadoFrom: FormGroup;
  constructor(private _AgregarEmpleadoService: AgregarEmpleadoService,
              public formBuilder:FormBuilder,
              public navCtrl:NavController,
              public alertController: AlertController){
                this.AgregarEmpleadoFrom = this.formBuilder.group({
                  'nombres':new FormControl("",Validators.required),
                  'apellidos':new FormControl("",Validators.required),
                  'direccion':new FormControl("",Validators.required),
                  'telefono':new FormControl("",Validators.required),
                  'fechaNacimiento':new FormControl("",Validators.required),
                  'puesto':new FormControl("",Validators.required),
                });
     }

  ngOnInit() {
  }
  guardar(){
    let form = this.AgregarEmpleadoFrom.value;
    this._AgregarEmpleadoService.guardar(form).subscribe((res)=>{
      this.navCtrl.navigateForward('menu/home');
    },(error) =>{
      console.log(error);
    });
  }
}
