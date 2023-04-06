import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenServiceService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

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
  @HostListener('window:wheel', ['$event'])
  onScroll(event: any) {
    if (
      event.deltaY > 0 &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 1 &&
      !this.varclass
    ) {
      Swal.fire({
        title: '¿Ir a habilidades?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ir!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('/skills');
        }
      });
    }
  }
}
