import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Config } from '../config';
import { Observable } from "rxjs";

@Injectable()
export class EmpleadosService {

    apiEndpoint: string;

    constructor(private _http: HttpClient, private config: Config) {
        this.apiEndpoint = this.config.API_MAIN;
    }
    getEmpleados(): Observable<any> {
        return this._http.get(this.apiEndpoint +'empleados');
    }
    getEmpleado(data): Observable<any> {
        return this._http.post(this.apiEndpoint +'empleados',data);
    }

}