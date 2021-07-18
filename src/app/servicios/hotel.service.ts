import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { conexion } from './global.service';
import { Observable } from 'rxjs';
import { Hotel } from '../model/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http:HttpClient) {
    this.ruta = conexion.url;
   }

  obtenerHotel(): Observable<any>{
    return this._http.get(this.ruta + 'buscarHotel', {headers: this.headersVariable})
  }

  agregarHotel(hotel: Hotel): Observable<any>{
    let params = JSON.stringify(hotel)
    return this._http.post(this.ruta + 'registrarHotel', params, {headers: this.headersVariable})
  }

  reporteHotel(): Observable<any>{
    return this._http.get(this.ruta + 'hotelesSolicitados', {headers: this.headersVariable})
  }

  obtenerHotelId(idAdmin):Observable<any>{
    return this._http.get(this.ruta + 'buscarHotelId/' + idAdmin, {headers: this.headersVariable})
  }

  editarHotel(hotel: Hotel, idHotel: String):Observable<any>{
    let params = JSON.stringify(hotel);
    return this._http.put(this.ruta + 'editarHotel/' + idHotel, params, { headers: this.headersVariable })
  }

  eliminarHotel(id: Hotel):Observable<any>{
    return this._http.put(this.ruta + 'eliminarHotel/' + id, {headers: this.headersVariable})
  }
}
