import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { DetallesEmpleadoService } from './detalles-empleado.service';
import { AlertController }   from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Events } from "../events";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.page.html',
  styleUrls: ['./detalles-empleado.page.scss'],
  providers:[ DetallesEmpleadoService]
})
export class DetallesEmpleadoPage implements OnInit {
  empleadoForm: FormGroup;
  idEmpleado: number;
  id:number;
  empleado:any;
  edit:boolean= false;
  constructor(private activeRoute: ActivatedRoute,
              private _DetallesEmpleadoService: DetallesEmpleadoService,
              public events: Events,
              public formBuilder:FormBuilder,
              public navCtrl:NavController,
              public alertController: AlertController,
              private changeRef: ChangeDetectorRef,) {
                this.empleadoForm = this.formBuilder.group({
                  'nombres':new FormControl("",Validators.required),
                  'apellidos':new FormControl("",Validators.required),
                  'direccion':new FormControl("",Validators.required),
                  'telefono':new FormControl("",Validators.required),
                  'fechaNacimiento':new FormControl("",Validators.required),
                  'puesto':new FormControl("",Validators.required),
                });
               }

  ngOnInit() {
    this.idEmpleado = this.activeRoute.snapshot.params.id;
    this._DetallesEmpleadoService.showDetallesEmpleado({id:this.idEmpleado}).subscribe((res)=>{
      this.empleado = res.employe[0];
      this.empleadoForm.controls['nombres'].setValue(this.empleado.nombres);
      this.empleadoForm.controls['apellidos'].setValue(this.empleado.apellidos);
      this.empleadoForm.controls['direccion'].setValue(this.empleado.direccion);
      this.empleadoForm.controls['telefono'].setValue(this.empleado.telefono);
      this.empleadoForm.controls['fechaNacimiento'].setValue(this.empleado.fechaNacimiento);
      this.empleadoForm.controls['puesto'].setValue(this.empleado.puesto);
      console.log(this.empleado)
    })
  }
  editar(){
    let form = this.empleadoForm.value;
    form.id = this.idEmpleado
      this._DetallesEmpleadoService.editar(form).subscribe((res)=>{
        console.log(res)
        this.navCtrl.navigateForward('menu/home');
        this.events.empleadoChangeSubject.next();
      },(error) =>{
        console.log(error);
      });

  }
  inactivo(){
    let form = this.empleadoForm.value;
    form.id = this.idEmpleado
      this._DetallesEmpleadoService.inactivo(form).subscribe((res)=>{
        console.log(res)
        this.navCtrl.navigateForward('menu/home');
        this.events.empleadoChangeSubject.next();
      },(error) =>{
        console.log(error);
      });

  }
  
  async editAlert() {
    const alert = await this.alertController.create({
      header: 'Deseas editar este registro',
      message: 'se aplicaran cambios al registro',
      buttons: [{text:'OK',handler: () => {
        this.editar();
        console.log("editando")
      }},{text:'Cancelar',handler: () => {
        this.navCtrl.navigateForward('menu/home');
      }}]
    });
    await alert.present();
  }
  async inactivoAlert() {
    const alert = await this.alertController.create({
      header: 'Deseas marcar como inactivo a este empleado',
      message: 'se aplicaran cambios al registro',
      buttons: [{text:'OK',handler: () => {
        this.inactivo();

      }},{text:'Cancelar',handler: () => {
        this.navCtrl.navigateForward('menu/home');
      }}]
    });
    await alert.present();
  }
}
