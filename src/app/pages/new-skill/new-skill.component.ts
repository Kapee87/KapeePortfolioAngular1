import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
})
export class NewSkillComponent implements OnInit {
  algunTempo: any;
  form: FormGroup;

  skills: Skills = new Skills(0, '', '', 0);
  constructor(
    private formBuilder: FormBuilder,
    public skillService: SkillsService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nombreSkill: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
      fotoSkill: '',
    });
  }

  ngOnInit(): void {}

  onEnviar($event: { target: any }) {
    if (this.form.valid) {
      try {
        this.skillService.save(this.skills).subscribe((data) => {
          Swal.fire('Se registró una nueva skills laboral');
          this.router.navigateByUrl('/skills');
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire('Algún/os campos requeridos están vacíos...');
    }
  }

  onSelect($event: { target: any }) {
    if ($event.target.value === '') {
      $event.target.value = $event.target.placeholder;
      this.onChange($event);
    }
  }

  onChange($event: { target: any }) {
    if ($event.target.name === 'nombreSkill') {
      this.skills.nombreSkill = $event.target.value;
    }
    if ($event.target.name === 'fotoSkill') {
      this.skills.fotoSkill = $event.target.value;
    }
    if ($event.target.name === 'porcentaje') {
      if ($event.target.value <= 100) {
        this.skills.porcentaje = $event.target.value;
      } else {
        Swal.fire('El límite para el porcentaje es de 100');
        $event.target.value = 100;
      }
    }
  }

}
