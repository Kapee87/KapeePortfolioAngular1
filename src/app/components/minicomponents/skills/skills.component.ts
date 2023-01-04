import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  varclass = true;
  valor=20;
  skills: Skills[] = [];

  constructor(public service: SkillsService) {}

  ngOnInit(): void {
    this.service.getSkills().subscribe((data) => {
      this.skills= data;
      if (data !== null || data !== undefined){
        setTimeout(() => {
          this.varclass = !this.varclass;
        }, 500);
      }

    });
  }
}
