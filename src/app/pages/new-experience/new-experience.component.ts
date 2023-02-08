import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css'],
})
export class NewExperienceComponent implements OnInit {
  algunTempo: any;
  form: FormGroup;
  bruteToday = new Date();
  year = this.bruteToday.getFullYear();
  month = this.doMonth();
  day = this.doDay();
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

  experiencia: Experiencia = new Experiencia(0, '', '', '', '', '', '');
  constructor(
    private formBuilder: FormBuilder,
    public expService: ExperienciaService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      tituloExp: ['', [Validators.required]],
      empresaExp: ['', [Validators.required]],
      fechaIniExp: ['', [Validators.required]],
      fechaFinExp: '',
      descripcionExp: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onEnviar($event: { target: any }) {
    if (this.form.valid) {
      try {
        this.expService.save(this.experiencia).subscribe((data) => {
          Swal.fire('Se registró una nueva experiencia laboral');
          this.router.navigateByUrl('/experiencia-laboral');
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
}
