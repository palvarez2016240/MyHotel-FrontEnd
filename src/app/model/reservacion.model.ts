export class Reservacion{constructor(
  public _id: String,
  public cliente: String,
  public hotel: String,
  public habitacion: String,
  public fechaLlegada: String,
  public fechaSalida: String,
  public servicios: [{
    idServicio: String,
    nombreServicio: String,
    precio: String
  }],
  public facturada: String
){}}
