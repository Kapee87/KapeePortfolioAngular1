import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  varclass = true;
  Proyectos: Proyectos[] = [];

  constructor(private service: ProyectosService) {}

  ngOnInit(): void {
    this.service.getProyectos().subscribe((data) => {
      this.Proyectos = data;
      setTimeout(() => {
        this.varclass = !this.varclass;
      }, 500);
    });
  }

  public handleClick() {}
}
