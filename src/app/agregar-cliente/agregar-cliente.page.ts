import { Component, OnInit } from '@angular/core';
import { AlertController }   from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AgregarClienteService } from './agregar-cliente.service';
@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.page.html',
  styleUrls: ['./agregar-cliente.page.scss'],
  providers:[AgregarClienteService]
})
export class AgregarClientePage implements OnInit {
  AgregarClienteFrom: FormGroup;
  constructor(private _AgregarClienteService: AgregarClienteService,
              public formBuilder:FormBuilder,
              public navCtrl:NavController,
              public alertController: AlertController){
                this.AgregarClienteFrom = this.formBuilder.group({
                  'nombres':new FormControl("",Validators.required),
                  'apellidos':new FormControl("",Validators.required),
                  'direccion':new FormControl("",Validators.required),
                  'telefono':new FormControl("",Validators.required),
                  'correo':new FormControl("",Validators.required),
                });
     }
  ngOnInit() {
  }
  guardar(){
    let form = this.AgregarClienteFrom.value;
    this._AgregarClienteService.guardar(form).subscribe((res)=>{
      console.log(res)
      this.presentAlert(res.message)
      this.navCtrl.navigateForward('menu/home');
    },(error) =>{
      console.log(error);
    });
  }
  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Cliente Registrado',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

}
