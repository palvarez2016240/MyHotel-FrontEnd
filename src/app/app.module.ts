import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InicioAdminComponent } from './componentes/inicio-admin/inicio-admin.component';
import { NavbarAdminComponent } from './componentes/navbar-admin/navbar-admin.component';
import { UsuariosRegistradosComponent } from './componentes/usuarios-registrados/usuarios-registrados.component';
import { AgregarHotelComponent } from './componentes/agregar-hotel/agregar-hotel.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { HabitacionComponent } from './componentes/habitacion/habitacion.component';
import { NavbarHotelComponent } from './componentes/navbar-hotel/navbar-hotel.component';
import { InicioHotelComponent } from './componentes/inicio-hotel/inicio-hotel.component';
import { GestionarHotelComponent } from './componentes/gestionar-hotel/gestionar-hotel.component';
import { ReservarComponent } from './componentes/reservar/reservar.component';
import { ReservacionesComponent } from './componentes/reservaciones/reservaciones.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { ReservacionHechaComponent } from './componentes/reservacion-hecha/reservacion-hecha.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    InicioComponent,
    InicioAdminComponent,
    NavbarAdminComponent,
    UsuariosRegistradosComponent,
    AgregarHotelComponent,
    ReportesComponent,
    PerfilComponent,
    HistorialComponent,
    HabitacionComponent,
    NavbarHotelComponent,
    InicioHotelComponent,
    GestionarHotelComponent,
    ReservarComponent,
    ReservacionesComponent,
    FacturaComponent,
    ReservacionHechaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
