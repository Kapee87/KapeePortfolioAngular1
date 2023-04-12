import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenServiceService } from 'src/app/service/token.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent implements OnInit {
  editId?: any;
  algunTempo: any;
  form: FormGroup;
  bruteToday = new Date();
  year = this.bruteToday.getFullYear();
  month = this.doMonth();
  day = this.doDay();
  sendEnabled = false;
  file: any;
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
    private router: Router,
    public imgService: ImageService,
    private tokenService: TokenServiceService
  ) {
    this.form = this.formBuilder.group({
      nombreProyecto: ['', [Validators.required]],
      descripcionProyecto: ['', [Validators.required]],
      fechaProyecto: ['', [Validators.required]],
      urlProyecto: ['', [Validators.required]],
      img_proyecto: '',
    });
  }

  ngOnInit(): void {
    this.tokenService.isLogged() ? '' : this.router.navigateByUrl('/proyectos');
    const urlSearchParams = new URLSearchParams(window.location.search);
    try {
      this.editId = urlSearchParams.get('id');
      this.editId
        ? this.proyectoService
            .getProyectoById(this.editId)
            .subscribe((data) => {
              this.proyectos = data;
              console.log(this.proyectos);
            })
        : ';';
    } catch (error) {}
    console.log();
  }

  onEnviar($event: { target: any }) {
    if (this.form.valid && this.sendEnabled) {
      this.file
        ? (this.proyectos.img_proyecto = this.imgService.url)
        : (this.proyectos.img_proyecto = '');
      try {
        if (this.editId === null) {
          this.proyectoService.save(this.proyectos).subscribe((data) => {
            Swal.fire('Se registró un nuevo proyecto');
            this.imgService.url = '';
            this.router.navigateByUrl('/proyectos');
          });
        } else {
          this.proyectoService
            .update(this.editId, this.proyectos)
            .subscribe((data) => {
              Swal.fire('Se actualizó el proyecto');
              this.imgService.url = '';
              this.router.navigateByUrl('/proyectos');
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
  async uploadImage($event: any) {
    const id = this.proyectos.idProyecto;
    const folder = '/proyectos/' + id;
    const imgName = '/proyectos_' + id;
    this.file = await this.imgService.uploadImage($event, imgName, folder);
    this.sendEnabled = true;
  }
}
