import { Component, OnInit } from '@angular/core';
import { AlertController }   from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AgregarProveedorService } from './agregar-Proveedor.service';
@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.page.html',
  styleUrls: ['./agregar-proveedor.page.scss'],
  providers:[AgregarProveedorService]
})
export class AgregarProveedorPage implements OnInit {
  AgregarProveedorFrom: FormGroup;
  constructor(private _AgregarProveedorService: AgregarProveedorService,
    public formBuilder:FormBuilder,
    public navCtrl:NavController,
    public alertController: AlertController){
      this.AgregarProveedorFrom = this.formBuilder.group({
        'nombre':new FormControl("",Validators.required),
        'nombreEmpresa':new FormControl("",Validators.required),
        'telefono':new FormControl("",Validators.required),
        'correo':new FormControl("",Validators.required),
      });
    }
  ngOnInit() {
  }
  
  guardar(){
    let form = this.AgregarProveedorFrom.value;
    this._AgregarProveedorService.guardar(form).subscribe((res)=>{
      console.log(res)
      this.presentAlert(res.message)
      this.navCtrl.navigateForward('menu/home');
    },(error) =>{
      console.log(error);
    });
  }
  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Proveedor Registrado',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }


}
