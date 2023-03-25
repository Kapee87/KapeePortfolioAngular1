export class Experiencia {
  idExp?: number;
  tituloExp: String;
  empresaExp: String;
  fechaIniExp: String;
  fechaFinExp: String;
  descripcionExp: String;
  img_exp: String;

  constructor(
    idExp: number,
    tituloExp: String,
    empresaExp: String,
    fechaIniExp: String,
    fechaFinExp: String,
    descripcionExp: String,
    img_exp: String
  ) {
    this.idExp = idExp;
    this.tituloExp = tituloExp;
    this.empresaExp = empresaExp;
    this.fechaIniExp = fechaIniExp;
    this.fechaFinExp = fechaFinExp;
    this.descripcionExp = descripcionExp;
    this.img_exp = img_exp;
  }
}
