import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent implements OnInit {
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

  proyectos: Proyectos = new Proyectos(0, '', '', '', '', '');
  constructor(
    private formBuilder: FormBuilder,
    public proyectoService: ProyectosService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nombreProyecto: ['', [Validators.required]],
      descripcionProyecto: ['', [Validators.required]],
      fechaProyecto: ['', [Validators.required]],
      urlProyecto: ['', [Validators.required]],
      imgProyecto: '',
    });
  }

  ngOnInit(): void {}

  onEnviar($event: { target: any }) {
    if (this.form.valid) {
      try {
        this.proyectoService.save(this.proyectos).subscribe((data) => {
          Swal.fire('Se registró una nueva proyectos laboral');
          this.router.navigateByUrl('/proyectos');
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
    if ($event.target.name === 'nombreProyecto') {
      this.proyectos.nombreProyecto = $event.target.value;
    }
    if ($event.target.name === 'descripcionProyecto') {
      this.proyectos.descripcionProyecto = $event.target.value;
    }
    if ($event.target.name === 'fechaProyecto') {
      this.proyectos.fechaProyecto = $event.target.value;
    }
    if ($event.target.name === 'urlProyecto') {
      this.proyectos.urlProyecto = $event.target.value;
    }
  }
}
