import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { conexion } from './global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FacturaService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http:HttpClient) {
    this.ruta = conexion.url;
  }

  facturar(idReservacion: String):Observable<any>{
    return this._http.post(this.ruta + 'facturar/' + idReservacion, {headers: this.headersVariable})
  }

  obtenerFactura(idHotel: String):Observable<any>{
    return this._http.get(this.ruta + 'facturaHecha/' + idHotel, {headers: this.headersVariable})
  }
}
