import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/servicios/hotel.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Hotel } from 'src/app/model/hotel.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [HotelService]
})
export class InicioComponent implements OnInit {
  public hotelModel: Hotel;
  public hotel: any;
  public hotelList: any;
  constructor(
    private _hotelService: HotelService,
    private _ruta: Router
  ) { this.hotelModel = new Hotel("","", "", "", "", 0, "") }

  ngOnInit(): void {
    this.obtenerHotel();
  }

  obtenerHotel(){
    this._hotelService.obtenerHotel().subscribe(
      response=>{
        console.log(response.hotelEncontrado);
        this.hotelList = response.hotelEncontrado;
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

  navegarHabitaciones(idHotel){
    this._ruta.navigate(['detalleHotel', idHotel]);
  }
}
