import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-edcucation',
  templateUrl: './new-edcucation.component.html',
  styleUrls: ['./new-edcucation.component.css'],
})
export class NewEdcucationComponent implements OnInit {
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

  educacion: Educacion = new Educacion(0, '', '', '', '', '', '');
  constructor(
    private formBuilder: FormBuilder,
    public educationService: EducacionService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      tituloEdu: ['', [Validators.required]],
      institucionEdu: ['', [Validators.required]],
      fechaIniEdu: ['', [Validators.required]],
      fechaFinEdu: '',
      descripcionEdu: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onEnviar($event: { target: any }) {
    if (this.form.valid) {
      try {
        this.educationService.save(this.educacion).subscribe((data) => {
          Swal.fire('Se registró una nueva educación');
          this.router.navigateByUrl('/educacion');
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
    if ($event.target.name === 'tituloEdu') {
      this.educacion.tituloEdu = $event.target.value;
    }
    if ($event.target.name === 'institucionEdu') {
      this.educacion.institucionEdu = $event.target.value;
    }
    if ($event.target.name === 'fechaIniEdu') {
      this.educacion.fechaIniEdu = $event.target.value;
    }
    if ($event.target.name === 'fechaFinEdu') {
      this.educacion.fechaFinEdu = $event.target.value;
    }
    if ($event.target.name === 'descripcionEdu') {
      this.educacion.descripcionEdu = $event.target.value;
    }
  }
}
