export class Persona {
  id?: number;
  nombre: String;
  apellido: String;
  fechaNac: String;
  telefono: String;
  correo: String;
  descripcion: String;
  urlFoto: String;

  constructor(
    nombre: String,
    apellido: String,
    fechaNac: String,
    telefono: String,
    correo: String,
    descripcion: String,
    urlFoto: String
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNac = fechaNac;
    this.telefono = telefono;
    this.correo = correo;
    this.descripcion = descripcion;
    this.urlFoto = urlFoto;
  }
}
