import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Reservacion } from 'src/app/model/reservacion.model';
import { Servicio } from 'src/app/model/servicio.model';
import { Usuario } from 'src/app/model/usuario.model';
import { ReservacionService } from 'src/app/servicios/reservacion.service';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [UsuarioService, ServicioService]
})
export class PerfilComponent implements OnInit {
  public usuarioModel: Usuario;
  public usuarioList;
  public historialList;
  public idUsuarioModel: Usuario;
  public servicioModel: Servicio;
  public token;
  constructor(
    public ruta: Router,
    public _usuarioService: UsuarioService,
    public _servicioService: ServicioService,
  ) { this.usuarioModel = new Usuario("","","","","",""),
    this.servicioModel = new Servicio('','','',0,''),
    this.idUsuarioModel = new Usuario("","","","","",""),
    this.token = _usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.obtenerUsuario().subscribe(
      response=>{
        console.log(response.usuarioEncontradoS);
        this.usuarioList = response.usuarioEncontradoS;
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

  obtenerPerfil(id){
    this._usuarioService.obtenerPerfil(id).subscribe(
      response=>{
        this.usuarioModel = response.usuarioEncontrado;
        console.log(response.usuarioEncontrado)
      }
    )
  }

  opId(id){
    this._usuarioService.obtenerPerfil(id).subscribe(
      response=>{
        this.idUsuarioModel = response.usuarioEncontrado;
        console.log(response)
      }
    )
  }

  navegarHistorial(idCliente){
    this.ruta.navigate(['/historial', idCliente]);
  }

  editarUsuario(){
    this._usuarioService.editarPerfil(this.idUsuarioModel).subscribe(
      response=>{
        console.log(response.usuarioactualizada)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Perfil editado, debes volverte a loguearte',
          showConfirmButton: false,
          timer: 1500
        })
        window.location.reload()
        this._usuarioService.obtenerIdentidad()
        this.ruta.navigate(['/perfil']);
      }
    ),
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
  }

  eliminarPerfil(idCliente){
    this._usuarioService.eliminarUsuario(idCliente).subscribe(
      response =>{
        console.log(response)
        this.obtenerUsuarios();
        this.ruta.navigate(['/login'])
      },
      error =>{
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

  navegarReservacion(){
    this.ruta.navigate(['/reservacionesHechas', this._usuarioService.obtenerIdentidad()._id])
  }
}
