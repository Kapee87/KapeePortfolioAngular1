export class Skills {
  idSkill?: number;
  nombreSkill: String;
  foto_skill: String;
  porcentaje: number;

  constructor(
    idSkill: number,
    nombreSkill: String,
    foto_skill: String,
    porcentaje: number
  ) {
    this.idSkill = idSkill;
    this.nombreSkill = nombreSkill;
    this.foto_skill = foto_skill;
    this.porcentaje = porcentaje;
  }
}
