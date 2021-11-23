import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Config } from '../config';
import { Observable } from "rxjs";

@Injectable()
export class ProveedoresService {

    apiEndpoint: string;

    constructor(private _http: HttpClient, private config: Config) {
        this.apiEndpoint = this.config.API_MAIN;
    }
    getProveedores(): Observable<any> {
        return this._http.get(this.apiEndpoint +'proveedores');
    }
    getProveedor(data): Observable<any> {
        return this._http.post(this.apiEndpoint +'proveedores',data);
    }

}