import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Reservacion } from 'src/app/model/reservacion.model';
import { ReservacionService } from 'src/app/servicios/reservacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss'],
  providers: [ReservacionService, UsuarioService]
})
export class ReservarComponent implements OnInit {
  public reservacionModel: Reservacion;
  public idHabitacionRuta: string;
  token: String;
  constructor(
    private _ruta: Router,
    public _reservacionService: ReservacionService,
    public _usuarioService: UsuarioService,
    public _activatedRoute: ActivatedRoute
  ) {
    this.reservacionModel = new Reservacion("","","","","","",[{idServicio: '',nombreServicio:'', precio:''}],''),
    this.token = _usuarioService.obtenerToken()
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(dataRuta =>{
      this.idHabitacionRuta = dataRuta.get('idHabitacion')
    })
  }

  reservar(){
    this._reservacionService.reservar(this.reservacionModel, this.idHabitacionRuta,this.token).subscribe(
      response =>{
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Reservacion Hecha',
          showConfirmButton: false,
          timer: 1500
        })
        this._ruta.navigate(['/reservacionesHechas', this._usuarioService.obtenerIdentidad()._id])
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
