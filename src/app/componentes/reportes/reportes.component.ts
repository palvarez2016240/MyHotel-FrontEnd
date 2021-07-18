import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/servicios/hotel.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Hotel } from 'src/app/model/hotel.model';
import { HabitacionService } from 'src/app/servicios/habitacion.service';
import { Habitacion } from 'src/app/model/habitacion.model';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
  providers: [HotelService, HabitacionService]
})
export class ReportesComponent implements OnInit {
  public hotelModel;
  public hotel;
  public hotelList;
  public habitacionModel;
  public habitacion;
  public habList;
  constructor(
    public _hotelService: HotelService,
    public _habitacionService: HabitacionService,
    private _ruta: Router
  ) {
    this.hotelModel = new Hotel("", "", "", "", "", 0, ""),
    this.habitacionModel = new Habitacion('', '', 0, '', '', '', false, '', 0)
  }

  ngOnInit(): void {
    this.obtenerReporte();
  }

  obtenerReporte() {
    this._hotelService.reporteHotel().subscribe(
      response => {
        console.log(response.hotelEncontrado);
        this.hotelList = response.hotelEncontrado;
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  reporteHabitaciones(id) {
    this._habitacionService.reporteHabitacion(id).subscribe(
      response => {
        console.log(response.habitacionEncontrada);
        this.habList = response.habitacionEncontrada;
      },
      error => {
        console.log(<any>error)
      }
    )
  }
}
