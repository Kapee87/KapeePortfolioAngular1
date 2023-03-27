export class Proyectos {
  idProyecto?: number;
  nombreProyecto: String;
  descripcionProyecto: String;
  fechaProyecto: String;
  img_proyecto: String;
  urlProyecto: String;

  constructor(
    idProyecto: number,
    nombreProyecto: String,
    descripcionProyecto: String,
    fechaProyecto: String,
    img_proyecto: String,
    urlProyecto: String
  ) {
    this.idProyecto = idProyecto;
    this.nombreProyecto = nombreProyecto;
    this.descripcionProyecto = descripcionProyecto;
    this.fechaProyecto = fechaProyecto;
    this.img_proyecto = img_proyecto;
    this.urlProyecto = urlProyecto;
  }
}
