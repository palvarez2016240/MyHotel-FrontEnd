import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-registrados',
  templateUrl: './usuarios-registrados.component.html',
  styleUrls: ['./usuarios-registrados.component.scss'],
  providers: [UsuarioService]
})
export class UsuariosRegistradosComponent implements OnInit {
  public usuarioModel: Usuario;
  public usuario: any;
  public usuarioList: any;
  public usuarioListA: any;
  public idUsuarioModel: Usuario;
  constructor(
    public ruta: Router,
    private _usuarioService: UsuarioService
  ) {
    this.usuarioModel = new Usuario("", "", "", "", "", ""),
    this.idUsuarioModel = new Usuario("", "", "", "", "", "")
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerUsuariosA();
  }

  obtenerUsuarios() {
    this._usuarioService.obtenerUsuario().subscribe(
      response => {
        console.log(response.usuarioEncontradoS);
        this.usuarioList = response.usuarioEncontradoS;
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  obtenerUsuariosA() {
    this._usuarioService.obtenerUsuarioA().subscribe(
      response => {
        console.log(response.usuarioEncontrado);
        this.usuarioListA = response.usuarioEncontrado;
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  editarRol(idCliente) {
    this._usuarioService.editarRol(idCliente).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Rol Ascendido',
          showConfirmButton: false,
          timer: 1500
        })
        window.location.reload()
      },
      error => {
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
