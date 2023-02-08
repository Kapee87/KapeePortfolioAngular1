export class Experiencia {
  idExp?: number;
  tituloExp: String;
  empresaExp: String;
  fechaIniExp: String;
  fechaFinExp: String;
  descripcionExp: String;
  imgExp: String;

  constructor(
    idExp: number,
    tituloExp: String,
    empresaExp: String,
    fechaIniExp: String,
    fechaFinExp: String,
    descripcionExp: String,
    imgExp: String
  ) {
    this.idExp = idExp;
    this.tituloExp = tituloExp;
    this.empresaExp = empresaExp;
    this.fechaIniExp = fechaIniExp;
    this.fechaFinExp = fechaFinExp;
    this.descripcionExp = descripcionExp;
    this.imgExp = imgExp;
  }
}
