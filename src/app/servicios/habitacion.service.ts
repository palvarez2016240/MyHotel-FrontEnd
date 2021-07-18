import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { conexion } from './global.service';
import { from, Observable } from 'rxjs';
import {Habitacion} from '../model/habitacion.model';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http:HttpClient) {
    this.ruta = conexion.url;
  }

  obtenerHabitacion(id: string):Observable<any>{
    return this._http.get(this.ruta + 'buscarHabitacion/' + id, {headers: this.headersVariable})
  }

  agregarHabitacion(habitacion: Habitacion, idHotel: String): Observable<any>{
    let params = JSON.stringify(habitacion)
    return this._http.post(this.ruta + 'registrarHabitacion/' + idHotel , params, {headers: this.headersVariable})
  }

  reporteHabitacion(id: string):Observable<any>{
    return this._http.get(this.ruta + 'habitacionesSolicitadas/' + id, {headers: this.headersVariable})
  }
}
