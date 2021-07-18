import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservacion } from 'src/app/model/reservacion.model';
import { Servicio } from 'src/app/model/servicio.model';
import { ReservacionService } from 'src/app/servicios/reservacion.service';
import { ServicioService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservacion-hecha',
  templateUrl: './reservacion-hecha.component.html',
  styleUrls: ['./reservacion-hecha.component.scss'],
  providers: [ReservacionService, ServicioService]
})
export class ReservacionHechaComponent implements OnInit {
  public reservacionModel: Reservacion;
  public reservacion: any;
  public reservacionList: any;
  public idHotelRuta;
  public servicioModel: Servicio;
  public idReservacionModel: Reservacion;
  public modelRes= {
    nombre: ''
  }
  constructor(
    public _reservacionService: ReservacionService,
    public _servicioService: ServicioService,
    private _ruta: Router,
    public _activatedRoute: ActivatedRoute
  ) {
    this.reservacionModel = new Reservacion("", "", "", "", "", "", [{ idServicio: '', nombreServicio: '', precio: '' }], ''),
    this.idReservacionModel = new Reservacion("", "", "", "", "", "", [{ idServicio: '', nombreServicio: '', precio: '' }], ''),
      this.servicioModel = new Servicio('', '', '', 0, '')
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(dataRuta => {
      this.idHotelRuta = dataRuta.get('idCliente')
    })
    this.reservacionUsuario(this.idHotelRuta);
  }

  reservacionUsuario(idCliente) {
    this._reservacionService.reservacionUsuario(idCliente).subscribe(
      response => {
        this.reservacionList = response.reservacionEncontrada;
        console.log(response)
      }
    )
  }

  agregarServicio(idReservacion) {
    this._reservacionService.otroServicio(this.modelRes, idReservacion).subscribe(
      response => {
        console.log(response.ServicioAgregado)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Servicio Agregado',
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
        window.location.reload()
      }
    )
  }

  cancelarReservacion(id){
    this._reservacionService.cancelar(id).subscribe(
      response =>{
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Reservacion Cancelada',
          showConfirmButton: false,
          timer: 1500
        })
        this._ruta.navigate(['/inicio']);
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

  reservacionId(id){
    this._reservacionService.reservacionID(id).subscribe(
      response=>{
        this.idReservacionModel = response.reservacionEncontrada;
        console.log(response)
      }
    )
  }

}
