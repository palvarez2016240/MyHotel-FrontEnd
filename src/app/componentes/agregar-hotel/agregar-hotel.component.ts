import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/model/hotel.model';
import { HotelService } from 'src/app/servicios/hotel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-hotel',
  templateUrl: './agregar-hotel.component.html',
  styleUrls: ['./agregar-hotel.component.scss'],
  providers: [HotelService]
})
export class AgregarHotelComponent implements OnInit {
  public hotelModel: Hotel;
  public hotel;
  public hotlList: Hotel
  constructor(
    private _hotelService: HotelService,
    private _ruta: Router
  ) { this.hotelModel = new Hotel("", "", "", "", "", 0, "") }

  ngOnInit(): void {
    this.obtenerHotel();
  }

  agregar() {
    this._hotelService.agregarHotel(this.hotelModel).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hotel Registrado',
          showConfirmButton: false,
          timer: 1500
        })
        window.location.reload()
        this._ruta.navigate(['/agregarHotel']);
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

  obtenerHotel() {
    this._hotelService.obtenerHotel().subscribe(
      response => {
        console.log(response.hotelEncontrado);
        this.hotlList = response.hotelEncontrado;
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  eleminarHotel(id) {
    this._hotelService.eliminarHotel(id).subscribe(
      response =>{
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hotel Eliminado',
          showConfirmButton: false,
          timer: 1500
        })
        window.location.reload()
      },
      error =>{
        console.log(<any>error)
        Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: error.error.mensaje,
        showConfirmButton: false,
        timer: 3000
      })
      }
    )
  }

}
