import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenServiceService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  userLogged = false;
  varclass = true;
  valor = 20;
  skills: Skills[] = [];

  constructor(
    public service: SkillsService,
    private tokenService: TokenServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.isLogged()) {
      this.userLogged = true;
    }
    this.service.getSkills().subscribe((data) => {
      this.skills = data;
      // console.log(data);

      if (data !== null || data !== undefined) {
        setTimeout(() => {
          this.varclass = !this.varclass;
        }, 500);
      }
    });
  }
  handleClick(skill: any) {
    this.router.navigateByUrl(`/newSkill?id=${skill.idSkill}`);
  }
  handleDelete(Skill: any) {
    this.service.delete(Skill.idSkill).subscribe((data) => {
      this.service.getSkills().subscribe((data) => (this.skills = data));
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
        title: '¿Volver al inicio?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ir!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('/inicio', {skipLocationChange:false});
          
        }
      });
    }
  }
}
