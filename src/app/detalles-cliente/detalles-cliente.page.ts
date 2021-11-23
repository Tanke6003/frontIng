import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { DetallesClienteService } from './detalles-cliente.service';
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
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.page.html',
  styleUrls: ['./detalles-cliente.page.scss'],
  providers:[DetallesClienteService]
})
export class DetallesClientePage implements OnInit {
  clienteForm: FormGroup;
  idCliente: number;
  id:number;
  cliente:any;
  edit:boolean= false;
  constructor(private activeRoute: ActivatedRoute,
              private _DetallesClienteService: DetallesClienteService,
              public events: Events,
              public formBuilder:FormBuilder,
              public navCtrl:NavController,
              public alertController: AlertController,
              private changeRef: ChangeDetectorRef,) {
                this.clienteForm = this.formBuilder.group({
                  'nombres':new FormControl("",Validators.required),
                  'apellidos':new FormControl("",Validators.required),
                  'direccion':new FormControl("",Validators.required),
                  'telefono':new FormControl("",Validators.required),
                  'correo':new FormControl("",Validators.required),
                });
               }

  ngOnInit() {
    this.idCliente = this.activeRoute.snapshot.params.id;
    this._DetallesClienteService.showDetallesCliente({id:this.idCliente}).subscribe((res)=>{
      this.cliente = res.client[0];
      this.clienteForm.controls['nombres'].setValue(this.cliente.nombres);
      this.clienteForm.controls['apellidos'].setValue(this.cliente.apellidos);
      this.clienteForm.controls['direccion'].setValue(this.cliente.direccion);
      this.clienteForm.controls['telefono'].setValue(this.cliente.telefono);
      this.clienteForm.controls['correo'].setValue(this.cliente.correo);
    })
  }
  editar(){
    let form = this.clienteForm.value;
    form.id = this.idCliente
      this._DetallesClienteService.editar(form).subscribe((res)=>{
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
}