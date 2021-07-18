export class Factura{constructor(
  public _id: String,
  public cliente: String,
  public hotel: String,
  public precioHabitacion: Number,
  public habitacion: String,
  public fechaLlegada: String,
  public fechaSalida: String,
  public servicios: [{
    idServicio: String,
    nombreServicio: String,
    precio: String
  }],
  public total: Number
){}}
