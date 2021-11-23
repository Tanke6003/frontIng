import { NgModule } from "@angular/core";
import { Subject, Observable } from 'rxjs'

@NgModule()
export class Events {

    empleadoChangeSubject: Subject<any> = new Subject();

    empleadoChange: Observable<any> = this.empleadoChangeSubject.asObservable();
    clienteChangeSubject: Subject<any> = new Subject();

    clienteChange: Observable<any> = this.clienteChangeSubject.asObservable();
    productoChangeSubject: Subject<any> = new Subject();

    productoChange: Observable<any> = this.productoChangeSubject.asObservable();

    constructor(){
        
    }
}