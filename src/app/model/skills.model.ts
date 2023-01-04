export class Skills {
  idSkill?: number;
  nombreSkill: String;
  fotoSkill: String;
  porcentaje: number;

  constructor(
    idSkill: number,
    nombreSkill: String,
    fotoSkill: String,
    porcentaje: number
  ) {
    this.idSkill = idSkill;
    this.nombreSkill = nombreSkill;
    this.fotoSkill = fotoSkill;
    this.porcentaje = porcentaje;
  }
}
