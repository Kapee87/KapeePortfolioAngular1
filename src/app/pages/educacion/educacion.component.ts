import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  varclass = true;
  educacion: Educacion[] = [];
  constructor(private service: EducacionService) {}

  ngOnInit(): void {
    this.service.lista().subscribe((data) => {
      this.educacion = data;
      if (data.length !== 0){
        setTimeout(() => {
          this.varclass = !this.varclass;
        }, 500);
      }
    })
    ;
  }

  handleClick(Exp: any){
    console.log(Exp.idEdu);
  }
}
