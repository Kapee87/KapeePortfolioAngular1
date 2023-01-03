export class Skills {
  id?: number;
  nombreSkill: String;
  fotoSkill: String;
  porcentaje: number;

  constructor(
    id: number,
    nombreSkill: String,
    fotoSkill: String,
    porcentaje: number
  ) {
    this.id = id;
    this.nombreSkill = nombreSkill;
    this.fotoSkill = fotoSkill;
    this.porcentaje = porcentaje;
  }
}
