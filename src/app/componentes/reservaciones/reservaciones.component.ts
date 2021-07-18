import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/model/factura.model';
import { Reservacion } from 'src/app/model/reservacion.model';
import { FacturaService } from 'src/app/servicios/factura.service';
import { ReservacionService } from 'src/app/servicios/reservacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss'],
  providers: [ReservacionService, FacturaService]
})
export class ReservacionesComponent implements OnInit {
  public reservacionModel: Reservacion;
  public facturaModel: Factura;
  public reservacion: any;
  public reservacionList: any;
  public idHotelRuta;
  constructor(
    public _reservacionService: ReservacionService,
    public _facturaService: FacturaService,
    private _ruta: Router,
    public _activatedRoute: ActivatedRoute
  ) {
    this.reservacionModel = new Reservacion("","","","","","",[{idServicio: '',nombreServicio:'', precio:''}],''),
    this.facturaModel = new Factura('','','',0,'','','',[{idServicio: '',nombreServicio:'', precio:''}],0)
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(dataRuta =>{
      this.idHotelRuta = dataRuta.get('idHotel')
    })
    this.mostrarReservaciones(this.idHotelRuta)
  }

  mostrarReservaciones(idHotel){
    this._reservacionService.obtenerReservaciones(idHotel).subscribe(
      response=>{
        this.reservacionList = response.reservacionEncontrada;
        console.log(response)
      }
    )
  }

  facturarReservaciones(idReservacion){
    this._facturaService.facturar(idReservacion).subscribe(
      response =>{
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Reservacion facturada',
          showConfirmButton: false,
          timer: 1500
        })
        this._ruta.navigate(['facturas', this.idHotelRuta]);
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
