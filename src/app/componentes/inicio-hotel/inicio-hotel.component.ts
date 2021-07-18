import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/model/hotel.model';
import { HotelService } from 'src/app/servicios/hotel.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-hotel',
  templateUrl: './inicio-hotel.component.html',
  styleUrls: ['./inicio-hotel.component.scss'],
  providers: [HotelService,UsuarioService]
})
export class InicioHotelComponent implements OnInit {
  public hotelModel: Hotel;
  public hotel: any;
  public hotelLista: any;
  constructor(
    private _hotelService: HotelService,
    private _usuarioService: UsuarioService,
    private _ruta: Router
  ) { this.hotelModel = new Hotel("","", "", "", "", 0, "") }

  ngOnInit(): void {
    this.obtenerHotelId(this._usuarioService.obtenerIdentidad()._id);
  }

  obtenerHotelId(idAdmin){
    this._hotelService.obtenerHotelId(idAdmin).subscribe(
      response=>{
        console.log(response.hotelEncontrado);
        this.hotelLista = response.hotelEncontrado;
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

  navegarGestion(idHotel){
    this._ruta.navigate(['gestionHotel', idHotel]);
  }

  editarHotel(idHotel) {
    this._hotelService.editarHotel(this.hotelModel, idHotel).subscribe(
      response => {
        console.log(response.hotelActualizado)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hotel editado',
          showConfirmButton: false,
          timer: 1500
        })
        this._ruta.navigate(['/inicioAdministrarHotel']);
      }
    ),
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
  }
}
