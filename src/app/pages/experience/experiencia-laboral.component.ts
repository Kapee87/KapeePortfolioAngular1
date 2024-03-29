import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenServiceService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css'],
})
export class ExperienciaLaboralComponent implements OnInit {
  userLogged = false;
  varclass = true;
  experiencia: Experiencia[] = [];
  constructor(
    private service: ExperienciaService,
    private tokenService: TokenServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.isLogged()) {
      this.userLogged = true;
    }
    this.service.lista().subscribe((data) => {
      this.experiencia = data;
      if (data !== null || data !== undefined) {
        setTimeout(() => {
          this.varclass = !this.varclass;
        }, 500);
      }
    });
  }

  handleClick(exp: any) {
    this.router.navigateByUrl(`/nuevaExperiencia?id=${exp.idExp}`);
  }
  handleDelete(exp: any) {
    this.service.delete(exp.idExp).subscribe((data) => {
      this.service.lista().subscribe((data) => (this.experiencia = data));
    });
  }
}
