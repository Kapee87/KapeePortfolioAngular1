export class Educacion {
    id?:number;
    tituloEdu:String;
    institucionEdu:String;
    fechaIniEdu:String;
    fechaFinEdu:String;
    descripcionEdu:String;
    imgEdu:String;

    constructor(id:number, tituloEdu:String, institucionEdu:String, fechaIniEdu:String,fechaFinEdu:String,descripcionEdu:String,imgEdu:String){
        this.id=id;
        this.tituloEdu=tituloEdu;
        this.institucionEdu=institucionEdu;
        this.fechaIniEdu=fechaIniEdu;
        this.fechaFinEdu=fechaFinEdu;
        this.descripcionEdu=descripcionEdu;
        this.imgEdu=imgEdu;
    }
}
