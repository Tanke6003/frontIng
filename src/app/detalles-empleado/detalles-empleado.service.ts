import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Config } from '../config';
import { Observable } from "rxjs";

@Injectable()
export class DetallesEmpleadoService {

    apiEndpoint: string;

    constructor(private _http: HttpClient, private config: Config) {
        this.apiEndpoint = this.config.API_MAIN;
    }
    showDetallesEmpleado(data): Observable<any> {
        return this._http.post(this.apiEndpoint + 'detalles-Empleados',data);
    }

}