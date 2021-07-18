import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/model/factura.model';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss'],
  providers: [FacturaService]
})
export class FacturaComponent implements OnInit {
  public facturaModel: Factura;
  public factList;
  public idHotelRuta;
  constructor(
    public _facturaService: FacturaService,
    private _ruta: Router,
    public _activatedRoute: ActivatedRoute
  ) {
    this.facturaModel = new Factura('','','',0,'','','',[{idServicio: '',nombreServicio:'', precio:''}],0)
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(dataRuta =>{
      this.idHotelRuta = dataRuta.get('idHotel')
    })
    this.mostrarFactura(this.idHotelRuta)
  }

  mostrarFactura(idHotel){
    this._facturaService.obtenerFactura(idHotel).subscribe(
      response=>{
        this.factList = response.facturaEncontrada;
        console.log(response)
      }
    )
  }
}
