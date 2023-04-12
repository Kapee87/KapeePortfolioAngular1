import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ImageService } from 'src/app/service/image.service';
import { TokenServiceService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css'],
})
export class NewExperienceComponent implements OnInit {
  editId?: any;
  algunTempo: any;
  form: FormGroup;
  bruteToday = new Date();
  file: any;
  year = this.bruteToday.getFullYear();
  month = this.doMonth();
  day = this.doDay();
  experiencia: Experiencia = new Experiencia(0, '', '', '', '', '', '');

  doMonth() {
    if (this.bruteToday.getMonth() < 10) {
      return '0' + this.bruteToday.getMonth();
    } else {
      return '0' + this.bruteToday.getMonth();
    }
  }
  doDay() {
    if (this.bruteToday.getDay() < 10) {
      return '0' + this.bruteToday.getDay();
    } else {
      return '0' + this.bruteToday.getDay();
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    public expService: ExperienciaService,
    private router: Router,
    public imgService: ImageService,
    private tokenService: TokenServiceService
  ) {
    this.form = this.formBuilder.group({
      tituloExp: ['', [Validators.required]],
      empresaExp: ['', [Validators.required]],
      fechaIniExp: ['', [Validators.required]],
      fechaFinExp: '',
      descripcionExp: ['', [Validators.required]],
      img_exp: [''],
    });
  }

  ngOnInit(): void {
    this.tokenService.isLogged()
      ? ''
      : this.router.navigateByUrl('/experiencia-laboral');
    const urlSearchParams = new URLSearchParams(window.location.search);
    try {
      this.editId = urlSearchParams.get('id');
      this.editId
        ? this.expService.details(this.editId).subscribe((data) => {
            this.experiencia = data;
            console.log(this.experiencia);
          })
        : '';
    } catch (error) {}
    console.log();
  }

  onEnviar($event: { target: any }) {
    if (this.form.valid) {
      this.file
        ? (this.experiencia.img_exp = this.imgService.url)
        : (this.experiencia.img_exp = '');
      try {
        if (this.editId === null) {
          this.expService.save(this.experiencia).subscribe((data) => {
            Swal.fire('Se registró una nueva experiencia laboral');
            this.imgService.url = '';
            this.router.navigateByUrl('/experiencia-laboral');
          });
        } else {
          this.expService
            .update(this.editId, this.experiencia)
            .subscribe((data) => {
              Swal.fire('Se actualizó la experiencia laboral');
              this.imgService.url = '';
              this.router.navigateByUrl('/experiencia-laboral');
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
    if ($event.target.name === 'tituloExp') {
      this.experiencia.tituloExp = $event.target.value;
    }
    if ($event.target.name === 'empresaExp') {
      this.experiencia.empresaExp = $event.target.value;
    }
    if ($event.target.name === 'fechaIniExp') {
      this.experiencia.fechaIniExp = $event.target.value;
    }
    if ($event.target.name === 'fechaFinExp') {
      this.experiencia.fechaFinExp = $event.target.value;
    }
    if ($event.target.name === 'descripcionExp') {
      this.experiencia.descripcionExp = $event.target.value;
    }
  }
  async uploadImage($event: any) {
    const id = this.experiencia.idExp;
    const folder = '/experiencia/' + id;
    const imgName = '/experiencia_' + id;
    this.file = await this.imgService.uploadImage($event, imgName, folder);
  }
}
