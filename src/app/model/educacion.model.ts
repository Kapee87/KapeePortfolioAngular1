export class Educacion {
  idEdu?: number;
  tituloEdu: String;
  institucionEdu: String;
  fechaIniEdu: String;
  fechaFinEdu: String;
  descripcionEdu: String;
  img_edu: String;

  constructor(
    idEdu: number,
    tituloEdu: String,
    institucionEdu: String,
    fechaIniEdu: String,
    fechaFinEdu: String,
    descripcionEdu: String,
    img_edu: String
  ) {
    this.idEdu = idEdu;
    this.tituloEdu = tituloEdu;
    this.institucionEdu = institucionEdu;
    this.fechaIniEdu = fechaIniEdu;
    this.fechaFinEdu = fechaFinEdu;
    this.descripcionEdu = descripcionEdu;
    this.img_edu = img_edu;
  }
}
