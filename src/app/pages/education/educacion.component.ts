import { Component, OnInit } from '@angular/core';
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
    if (this.tokenService.isLogged()) {
      this.userLogged = true;
      this.session.SessionTimeOut();
    }
    this.service.lista().subscribe((data) => {
      this.educacion = data;
      if (data.length !== 0) {
        setTimeout(() => {
          this.varclass = !this.varclass;
        }, 500);
      }
    });
  }

  handleClick(Edu: any) {
    console.log(Edu.idEdu);
  }
  handleDelete(Edu: any) {
    console.log(Edu.idEdu);
    this.service.delete(Edu.idEdu).subscribe((data) => {
      this.service.lista().subscribe((data) => (this.educacion = data));
    });
  }
}
