import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { conexion } from './global.service';
import { Observable } from 'rxjs';
import { Evento } from '../model/evento.model';
import { Servicio } from '../model/servicio.model';

@Injectable({
  providedIn: 'root'
})

export class EventoService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http:HttpClient) {
    this.ruta = conexion.url;
  }

  obtenerEvento(id: String): Observable<any>{
    return this._http.get(this.ruta + 'buscarEvento/' + id, {headers: this.headersVariable})
  }

  agregarEvento(evento: Evento, idHotel: String): Observable<any>{
    let params = JSON.stringify(evento)
    return this._http.post(this.ruta + 'registrarEvento/' + idHotel , params, {headers: this.headersVariable})
  }
}
