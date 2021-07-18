import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/model/evento.model';
import { Habitacion } from 'src/app/model/habitacion.model';
import { Servicio } from 'src/app/model/servicio.model';
import { EventoService } from 'src/app/servicios/evento.service';
import { HabitacionService } from 'src/app/servicios/habitacion.service';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.scss'],
  providers: [HabitacionService, ServicioService, EventoService]
})
export class HabitacionComponent implements OnInit {
  public habitacionalModel;
  public servicioModel;
  public eventoModel;
  public habList: Habitacion;
  public servList: Servicio;
  public evenList: Evento;
  public idServicioRuta: String;
  public idHotelRuta: string;
  public idEventoRuta: String;
  constructor(
    private _ruta: Router,
    public _habitacionService: HabitacionService,
    public _servicioService: ServicioService,
    public _eventoService: EventoService,
    public _activatedRoute: ActivatedRoute,
    public _activatedRoute2: ActivatedRoute,
    public _activatedRoute3: ActivatedRoute,
  ) {
    this.habitacionalModel = new Habitacion('','',0,'','','',false,'',0),
    this.servicioModel = new Servicio('','','',0,''),
    this.eventoModel = new Evento('','','','','')
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(dataRuta =>{
      this.idHotelRuta = dataRuta.get('idHotel')
    })
    this._activatedRoute2.paramMap.subscribe(dataRuta=>{
      this.idServicioRuta = dataRuta.get('idHotel')
    })
    this._activatedRoute3.paramMap.subscribe(dataRuta=>{
      this.idEventoRuta = dataRuta.get('idHotel')
    })
    this.obtenerHabitacionId(this.idHotelRuta),
    this.obtenerServicioId(this.idServicioRuta),
    this.obtenerEventoId(this.idEventoRuta)
  }

  obtenerHabitacionId(idHotel){
    this._habitacionService.obtenerHabitacion(idHotel).subscribe(
      response=>{
        this.habList = response.habitacionEncontrada;
        console.log(response)
      }
    )
  }

  obtenerServicioId(idHotel){
    this._servicioService.obtenerServicio(idHotel).subscribe(
      response =>{
        this.servList = response.servicioEncontrado;
        console.log(response)
      }
    )
  }

  obtenerEventoId(idHotel){
    this._eventoService.obtenerEvento(idHotel).subscribe(
      response =>{
        this.evenList = response.eventoEncontrado;
        console.log(response)
      }
    )
  }

  navegarReservacion(idHabitacion){
    this._ruta.navigate(['reservar', idHabitacion]);
  }
}
