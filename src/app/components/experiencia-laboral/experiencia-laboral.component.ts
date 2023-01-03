import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css'],
})
export class ExperienciaLaboralComponent implements OnInit {
  varclass = true;
  experiencia: Experiencia[] = [];
  constructor(private service: ExperienciaService) {}

  ngOnInit(): void {
    this.service.lista().subscribe((data) => {
      this.experiencia = data;
      if (data.length !== 0){
        setTimeout(() => {
          this.varclass = !this.varclass;
        }, 500);
      }
    })
    ;
  }

  handleClick(Exp: any){
    console.log(Exp.idExp);
  }
}
