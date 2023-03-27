import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills.model';
import { ImageService } from 'src/app/service/image.service';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenServiceService } from 'src/app/service/token.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
})
export class NewSkillComponent implements OnInit {
  editId?: any;
  algunTempo: any;
  form: FormGroup;
  file: any;
  sendEnabled = false;

  skills: Skills = new Skills(0, '', '', 0);
  constructor(
    private formBuilder: FormBuilder,
    public skillService: SkillsService,
    private router: Router,
    private tokenService: TokenServiceService,
    public imgService: ImageService
  ) {
    this.form = this.formBuilder.group({
      nombreSkill: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
      foto_skill: '',
    });
  }

  ngOnInit(): void {
    this.tokenService.isLogged() ? '' : this.router.navigateByUrl('/skills');
    const urlSearchParams = new URLSearchParams(window.location.search);
    try {
      this.editId = urlSearchParams.get('id');
      this.editId
        ? this.skillService.getSkillById(this.editId).subscribe((data) => {
            this.skills = data;
            console.log(this.skills);
          })
        : '';
    } catch (error) {}
    console.log();
  }

  onEnviar($event: { target: any }) {
    if (this.form.valid && this.sendEnabled) {
      this.file
        ? (this.skills.foto_skill = this.imgService.url)
        : (this.skills.foto_skill = '');
      try {
        if (this.editId === null) {
          this.skillService.save(this.skills).subscribe((data) => {
            Swal.fire('Se registró una nueva skills laboral');
            this.router.navigateByUrl('/skills');
          });
        } else {
          this.skillService
            .update(this.editId, this.skills)
            .subscribe((data) => {
              Swal.fire('Se actualizó la habilidad');
              this.router.navigateByUrl('/skills');
            });
        }
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
    this.form.value[$event.target.name] = $event.target.value;
    if ($event.target.name === 'nombreSkill') {
      this.skills.nombreSkill = $event.target.value;
    }
    if ($event.target.name === 'foto_skill') {
      this.skills.foto_skill = $event.target.value;
    }
    if ($event.target.name === 'porcentaje') {
      if (Number($event.target.value) <= 100) {
        this.skills.porcentaje = $event.target.value;
      } else {
        Swal.fire('El límite para el porcentaje es de 100');
        $event.target.value = 100;
      }
    }
  }
  async uploadImage($event: any) {
    const id = this.skills.idSkill;
    const folder = '/skills/' + id;
    const imgName = '/skills_' + id;
    this.file = await this.imgService.uploadImage($event, imgName, folder);
    this.sendEnabled = true;
  }
}
