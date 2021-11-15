import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Config } from '../config';
import { Observable } from "rxjs";

@Injectable()
export class ProductosService {

    apiEndpoint: string;

    constructor(private _http: HttpClient, private config: Config) {
        this.apiEndpoint = this.config.API_MAIN;
    }
    getProductos(): Observable<any> {
        return this._http.get(this.apiEndpoint +'productos');
    }
    getProducto(data): Observable<any> {
        return this._http.post(this.apiEndpoint +'productos',data);
    }
}