import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarHotelComponent } from './componentes/agregar-hotel/agregar-hotel.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { GestionarHotelComponent } from './componentes/gestionar-hotel/gestionar-hotel.component';
import { HabitacionComponent } from './componentes/habitacion/habitacion.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { InicioAdminComponent } from './componentes/inicio-admin/inicio-admin.component';
import { InicioHotelComponent } from './componentes/inicio-hotel/inicio-hotel.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { ReservacionHechaComponent } from './componentes/reservacion-hecha/reservacion-hecha.component';
import { ReservacionesComponent } from './componentes/reservaciones/reservaciones.component';
import { ReservarComponent } from './componentes/reservar/reservar.component';
import { UsuariosRegistradosComponent } from './componentes/usuarios-registrados/usuarios-registrados.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'inicioAdmin', component: InicioAdminComponent},
  {path: 'usuariosRegistrados', component: UsuariosRegistradosComponent},
  {path: 'agregarHotel', component: AgregarHotelComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'historial/:idCliente', component: HistorialComponent},
  {path: 'detalleHotel/:idHotel', component: HabitacionComponent},
  {path: 'inicioAdministrarHotel', component: InicioHotelComponent},
  {path: 'gestionHotel/:idHotel', component: GestionarHotelComponent},
  {path: 'reservar/:idHabitacion', component: ReservarComponent},
  {path: 'reservaciones/:idHotel', component: ReservacionesComponent},
  {path: 'facturas/:idHotel', component: FacturaComponent},
  {path: 'reservacionesHechas/:idCliente', component: ReservacionHechaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
