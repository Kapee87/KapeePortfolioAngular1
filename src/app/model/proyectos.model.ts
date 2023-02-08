export class Proyectos {
  idProyecto?: number;
  nombreProyecto: String;
  descripcionProyecto: String;
  fechaProyecto: String;
  imgProyecto: String;
  urlProyecto: String;

  constructor(
    idProyecto: number,
    nombreProyecto: String,
    descripcionProyecto: String,
    fechaProyecto: String,
    imgProyecto: String,
    urlProyecto: String
  ) {
    this.idProyecto = idProyecto;
    this.nombreProyecto = nombreProyecto;
    this.descripcionProyecto = descripcionProyecto;
    this.fechaProyecto = fechaProyecto;
    this.imgProyecto = imgProyecto;
    this.urlProyecto = urlProyecto;
  }
}
