import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { SessionTimingService } from 'src/app/service/session-timing.service';
import { TokenServiceService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  userLogged = false;
  varclass = true;
  educacion: Educacion[] = [];
  constructor(
    private service: EducacionService,
    private tokenService: TokenServiceService,
    private session: SessionTimingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.varclass);

    if (this.tokenService.isLogged()) {
      this.userLogged = true;
    }
    this.service.lista().subscribe((data) => {
      this.educacion = data;
      console.log(data);
      console.log(this.varclass);
      setTimeout(() => {
        this.varclass = !this.varclass;
      }, 500);
    });
  }

  handleClick(edu: any) {
    this.router.navigateByUrl(`/nuevaEducacion?id=${edu.idEdu}`);
  }
  handleDelete(Edu: any) {
    console.log(Edu.idEdu);
    this.service.delete(Edu.idEdu).subscribe((data) => {
      this.service.lista().subscribe((data) => (this.educacion = data));
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
        title: '¿Ir a proyectos?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ir!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('/proyectos');
        }
      });
    }
  }
}
