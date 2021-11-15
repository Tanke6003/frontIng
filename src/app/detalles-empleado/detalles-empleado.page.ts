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
  idEmpleado: number;
  date :Date;
  title: string;
  description: string;
  id:number;
  constructor(private activeRoute: ActivatedRoute,
              private _DetallesEmpleadoService: DetallesEmpleadoService,
              public events: Events,
              public formBuilder:FormBuilder,
              public navCtrl:NavController,
              public alertController: AlertController,
              private changeRef: ChangeDetectorRef,) { }

  ngOnInit() {
    this.idEmpleado = this.activeRoute.snapshot.params.idEmpleado;
    this._DetallesEmpleadoService.showDetallesEmpleado({idEmpleado:this.idEmpleado}).subscribe((res)=>{
      let empleado = res.empleado;
    })
  }
}
