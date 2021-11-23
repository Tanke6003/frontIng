import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Config } from '../config';
import { Observable } from "rxjs";

@Injectable()
export class DetallesClienteService {

    apiEndpoint: string;

    constructor(private _http: HttpClient, private config: Config) {
        this.apiEndpoint = this.config.API_MAIN;
    }
    showDetallesCliente(data): Observable<any> {
        return this._http.post(this.apiEndpoint + 'detalles-cliente',data);
    }
    editar(data): Observable<any> {
        return this._http.post(this.apiEndpoint +'editar-cliente',data);
    }


}