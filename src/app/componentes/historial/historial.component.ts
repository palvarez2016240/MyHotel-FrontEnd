import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Historial } from 'src/app/model/historial.model';
import { HistorialService } from 'src/app/servicios/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
  providers: [HistorialService]
})
export class HistorialComponent implements OnInit {
  public historialModel;
  public idClienteRuta: string;
  constructor(
    public _historialService: HistorialService,
    public _activatedRoute: ActivatedRoute
  ) {
    this.historialModel = new Historial('','','','',[{nombreServicio:''}])
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(dataRuta =>{
      this.idClienteRuta = dataRuta.get('idCliente')
    })
    this.obtenerHistorialId(this.idClienteRuta)
  }

  obtenerHistorialId(idCliente){
    this._historialService.obtenerHistorial(idCliente).subscribe(
      response =>{
        this.historialModel = response.usuarioEncontradoS;
        console.log(response);
      }
    )
  }
}
