import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { conexion } from './global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HistorialService{
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http:HttpClient) {
    this.ruta = conexion.url;
  }

  obtenerHistorial(id: String): Observable<any>{
    return this._http.get(this.ruta + 'historial/' + id, {headers: this.headersVariable})
  }
}
