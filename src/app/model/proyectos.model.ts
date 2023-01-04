export class Proyectos {
  id?: number;
  nombreProyecto: String;
  descripcionProyecto: String;
  fechaProyecto: String;
  imgProyecto: String;
  urlProyecto: String;

  constructor(
    id: number,
    nombreProyecto: String,
    descripcionProyecto: String,
    fechaProyecto: String,
    imgProyecto: String,
    urlProyecto: String
  ) {
    this.id = id;
    this.nombreProyecto = nombreProyecto;
    this.descripcionProyecto = descripcionProyecto;
    this.fechaProyecto = fechaProyecto;
    this.imgProyecto = imgProyecto;
    this.urlProyecto = urlProyecto;
  }
}
