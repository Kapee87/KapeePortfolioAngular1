import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenServiceService } from 'src/app/service/token.service';

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
    private tokenService: TokenServiceService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.isLogged()) {
      this.userLogged = true;
    }
    this.service.getSkills().subscribe((data) => {
      this.skills = data;
      if (data !== null || data !== undefined) {
        setTimeout(() => {
          this.varclass = !this.varclass;
        }, 500);
      }
    });
  }
  handleDelete(Skill: any) {
    this.service.delete(Skill.idSkill).subscribe((data) => {
      this.service.getSkills().subscribe((data) => (this.skills = data));
    });
  }
}
