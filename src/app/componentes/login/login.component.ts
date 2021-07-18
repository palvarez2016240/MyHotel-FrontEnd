import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarioModel: Usuario;
  public token;
  public identidad;
  constructor(
    private _usuarioService: UsuarioService,
    private _ruta: Router
  ) {this.usuarioModel = new Usuario("", "", "", "", "","")}

  ngOnInit(): void {
  }

  obtenerToken(){
    this._usuarioService.loguearse(this.usuarioModel, 'true').subscribe(
      response=>{
        this.token = response.token;
        localStorage.setItem('token', this.token);
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  logins(){
    this._usuarioService.loguearse(this.usuarioModel).subscribe(
      response=>{
        console.log(response);
        this.identidad = response;
        localStorage.setItem('identidad', JSON.stringify(this.identidad));
        this.obtenerToken();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Bienvenido de vuelta',
          showConfirmButton: false,
          timer: 1500
        })

        if(this.identidad.rol === 'ADMIN'){
        this._ruta.navigate(['/inicioAdmin']);
        }else {
          if(this.identidad.rol === 'CLIENTE'){
            this._ruta.navigate(['/inicio']);
          }else{
            this._ruta.navigate(['/inicioAdministrarHotel']);
          }
        }
      },
      error=>{
        console.log(<any>error)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }
}
