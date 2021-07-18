import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { conexion } from './global.service';
import { Observable } from 'rxjs';
import { Reservacion } from '../model/reservacion.model';
import { Servicio } from '../model/servicio.model';

@Injectable({
  providedIn: 'root'
})

export class ReservacionService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http:HttpClient) {
    this.ruta = conexion.url;
  }

  reservar(reservacion: Reservacion, idHabitacion: String, token):Observable<any>{
    let params = JSON.stringify(reservacion)
    let headersToken = this.headersVariable.set('Authorization',token)
    return this._http.post(this.ruta + 'reservar/' + idHabitacion , params, {headers: headersToken})
  }

  obtenerReservaciones(idHotel):Observable<any>{
    return this._http.get(this.ruta + 'reservacionesHechas/' + idHotel, {headers: this.headersVariable})
  }

  reservacionUsuario(idCliente):Observable<any>{
    return this._http.get(this.ruta + 'reservacaionesUsuario/' + idCliente, {headers: this.headersVariable})
  }

  cancelar(idReservacion):Observable<any>{
    return this._http.put(this.ruta + 'cancelarReservacion/' + idReservacion, {headers: this.headersVariable})
  }

  reservacionID(idReservacion):Observable<any>{
    return this._http.get(this.ruta + 'reservacionId/' + idReservacion, {headers: this.headersVariable})
  }

  otroServicio(modelRes, idReservacion: String):Observable<any>{
    let params = JSON.stringify(modelRes);

    return this._http.put(this.ruta + 'agregarServicio/' + idReservacion, params, { headers: this.headersVariable })
  }
}
