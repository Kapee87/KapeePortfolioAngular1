export class Persona {
  id?: number;
  nombre: String;
  apellido: String;
  fecha_nac: String;
  telefono: String;
  correo: String;
  descripcion: String;
  url_foto: String;

  constructor(
    nombre: String,
    apellido: String,
    fecha_nac: String,
    telefono: String,
    correo: String,
    descripcion: String,
    url_foto: String
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nac = fecha_nac;
    this.telefono = telefono;
    this.correo = correo;
    this.descripcion = descripcion;
    this.url_foto = url_foto;
  }
}
