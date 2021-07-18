import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/model/evento.model';
import { Habitacion } from 'src/app/model/habitacion.model';
import { Hotel } from 'src/app/model/hotel.model';
import { Servicio } from 'src/app/model/servicio.model';
import { EventoService } from 'src/app/servicios/evento.service';
import { HabitacionService } from 'src/app/servicios/habitacion.service';
import { HotelService } from 'src/app/servicios/hotel.service';
import { ServicioService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-hotel',
  templateUrl: './gestionar-hotel.component.html',
  styleUrls: ['./gestionar-hotel.component.scss'],
  providers: [HabitacionService, ServicioService, EventoService, HotelService]
})
export class GestionarHotelComponent implements OnInit {
  public habitacionalModel: Habitacion;
  public servicioModel;
  public eventoModel;
  public hotelModel: Hotel;
  public habList: Habitacion;
  public servList: Servicio;
  public evenList: Evento;
  public idHotelRuta: string;
  public idServicioRuta: String;
  public idEventoRuta: String;
  constructor(
    private _ruta: Router,
    public _habitacionService: HabitacionService,
    public _servicioService: ServicioService,
    public _eventoService: EventoService,
    public _hotelService: HotelService,
    public _activatedRoute: ActivatedRoute,
    public _activatedRoute2: ActivatedRoute,
    public _activatedRoute3: ActivatedRoute
  ) {
    this.habitacionalModel = new Habitacion('', '', 0, '', '', '', false, '', 0)
    this.servicioModel = new Servicio('', '', '', 0, ''),
      this.eventoModel = new Evento('', '', '', '', ''),
      this.hotelModel = new Hotel("", "", "", "", "", 0, "")
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(dataRuta => {
      this.idHotelRuta = dataRuta.get('idHotel')
    })
    this._activatedRoute2.paramMap.subscribe(dataRuta => {
      this.idServicioRuta = dataRuta.get('idHotel')
    })
    this._activatedRoute3.paramMap.subscribe(dataRuta => {
      this.idEventoRuta = dataRuta.get('idHotel')
    })
    this.obtenerHabitacionId(this.idHotelRuta),
      this.obtenerServicioId(this.idServicioRuta),
      this.obtenerEventoId(this.idEventoRuta)
  }

  obtenerHabitacionId(idHotel) {
    this._habitacionService.obtenerHabitacion(idHotel).subscribe(
      response => {
        this.habList = response.habitacionEncontrada;
        console.log(response)
      }
    )
  }

  obtenerServicioId(idHotel) {
    this._servicioService.obtenerServicio(idHotel).subscribe(
      response => {
        this.servList = response.servicioEncontrado;
        console.log(response)
      }
    )
  }

  obtenerEventoId(idHotel) {
    this._eventoService.obtenerEvento(idHotel).subscribe(
      response => {
        this.evenList = response.eventoEncontrado;
        console.log(response)
      }
    )
  }

  agregarHabitaciones() {
    this._habitacionService.agregarHabitacion(this.habitacionalModel, this.idHotelRuta).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Habitacion Registrada',
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

  agregarServicio() {
    this._servicioService.agregarServicio(this.servicioModel, this.idServicioRuta).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Servicio Registrado',
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

  agregarEvento() {
    this._eventoService.agregarEvento(this.eventoModel, this.idEventoRuta).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Evento Registrado',
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

  navegarReservaciones() {
    this._ruta.navigate(['reservaciones', this.idHotelRuta]);
  }

  navegarFacturas() {
    this._ruta.navigate(['facturas', this.idHotelRuta]);
  }
}
