import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { conexion } from './global.service';
import { Usuario } from '../model/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http:HttpClient) {
    this.ruta = conexion.url;
   }

   registro(usuario: Usuario): Observable<any>{let params = JSON.stringify(usuario)
    return this._http.post(this.ruta+'registrarUsuario', params, {headers: this.headersVariable})
   }

  obtenerUsuario(): Observable<any>{
    return this._http.get(this.ruta+'usuariosRegistrados', {headers: this.headersVariable})
  }

  obtenerUsuarioA(): Observable<any>{
    return this._http.get(this.ruta+'usuariosRegistradosA', {headers: this.headersVariable})
  }

 loguearse(user, getToken = null): Observable<any>{
    if(getToken != null){
      user.getToken = getToken;
    }
    let params = JSON.stringify(user);

    return this._http.post(this.ruta + 'loginUsuario', params, { headers: this.headersVariable });

  }

 obtenerIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidad2 != 'undefined'){
      this.identidad = identidad2;
    }else{
      this.identidad = null;
    }

    return this.identidad;
  }

  obtenerToken(){
    var token2 = localStorage.getItem('token');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }

    return this.token;
  }

  obtenerPerfil(id: String):Observable<any>{
    return this._http.get(this.ruta+'perfil/' + id, {headers: this.headersVariable});
  }

  editarPerfil(usuario: Usuario):Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.put(this.ruta + 'editarUsuario/' + usuario._id, params, { headers: headersToken })
  }

  editarRol(id: String):Observable<any>{
    return this._http.put(this.ruta + 'editarRol/' + id, {headers: this.headersVariable})
  }
/*  eliminarUsuario(id: String, token):Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.ruta + 'eliminarUsuario/' + id, { headers: headersToken });
  }*/

  eliminarUsuario(id: String):Observable<any>{
    return this._http.put(this.ruta + 'eliminarUsuario/' + id, { headers: this.headersVariable });
  }

 /* eliminarUsuario(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())
    return this._http.put(this.ruta + 'eliminarUsuario', {headers: headersToken})
  }*/
}
