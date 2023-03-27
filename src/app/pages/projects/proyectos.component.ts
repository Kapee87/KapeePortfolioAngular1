import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenServiceService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  userLogged = false;
  varclass = true;
  Proyectos: Proyectos[] = [];

  constructor(
    private service: ProyectosService,
    private tokenService: TokenServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.isLogged()) {
      this.userLogged = true;
    }
    this.service.getProyectos().subscribe((data) => {
      this.Proyectos = data;
      setTimeout(() => {
        this.varclass = !this.varclass;
      }, 500);
    });
  }

  handleClick(Proyectos: any) {
    this.router.navigateByUrl(`/nuevoProyecto?id=${Proyectos.idProyecto}`);
  }
  handleDelete(Proyectos: any) {
    this.service.delete(Proyectos.idProyecto).subscribe((data) => {
      this.service.getProyectos().subscribe((data) => (this.Proyectos = data));
    });
  }
}
