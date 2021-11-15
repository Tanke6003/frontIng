import { Component, OnInit } from '@angular/core';
import { AlertController }   from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AgregarProductoService } from './agregar-producto.service';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
  providers:[AgregarProductoService]
})
export class AgregarProductoPage implements OnInit {
  AgregarProductoFrom: FormGroup;
  constructor(private _AgregarProductoService:AgregarProductoService,
    public formBuilder:FormBuilder,
    public navCtrl:NavController,
    public alertController: AlertController) { 
      this.AgregarProductoFrom = this.formBuilder.group({
        'nombre':new FormControl("",Validators.required),
        'descripcion':new FormControl("",Validators.required),
        'precioVenta':new FormControl("",Validators.required),
      });
    }

  ngOnInit() {
  }
  guardar(){
    let form = this.AgregarProductoFrom.value;
    this._AgregarProductoService.guardar(form).subscribe((res)=>{
      this.navCtrl.navigateForward('menu/home');
    },(error) =>{
      console.log(error);
    });
  }
}
