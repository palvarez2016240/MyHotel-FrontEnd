import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { conexion } from './global.service';
import { Observable } from 'rxjs';
import { Servicio } from '../model/servicio.model';

@Injectable({
  providedIn: 'root'
})

export class ServicioService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http:HttpClient) {
    this.ruta = conexion.url;
  }

  obtenerServicio(id: String): Observable<any>{
    return this._http.get(this.ruta + 'buscarServicio/' + id, {headers: this.headersVariable})
  }

  agregarServicio(servicio: Servicio, idHotel: String): Observable<any>{
    let params = JSON.stringify(servicio)
    return this._http.post(this.ruta + 'registrarServicio/' + idHotel , params, {headers: this.headersVariable})
  }
}
