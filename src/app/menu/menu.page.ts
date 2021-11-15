import { Component, OnInit } from '@angular/core';
import{MenuService} from './menu.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  providers:[MenuService]
})
export class MenuPage implements OnInit {
  public paginas =[
    {
      titulo:'Home',
      url:'/menu/home',
      icon:'alert'
    },
    {
      titulo:'Empleados',
      url:'/menu/empleados',
      icon:'alert'
    },
    {
      titulo:'Productos',
      url:'/menu/productos',
      icon:'alert'
    },
    {
      titulo:'Clientes',
      url:'/menu/clientes',
      icon:'alert'
    },
    {
      titulo:'Ventas',
      url:'/menu/ventas',
      icon:'alert'
    },

  ];
  selectedIndex: number;
  constructor(private _MenuService: MenuService,
              public navCtrl:NavController,){
    
  }

  ngOnInit() {
  }
  changeSelectedIndex(index: number) {
      this.selectedIndex = index
    }

}
