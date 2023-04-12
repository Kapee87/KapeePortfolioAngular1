import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';
import { TokenServiceService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-edcucation',
  templateUrl: './new-edcucation.component.html',
  styleUrls: ['./new-edcucation.component.css'],
})
export class NewEdcucationComponent implements OnInit {
  editId?: any;
  algunTempo: any;
  form: FormGroup;
  bruteToday = new Date();
  year = this.bruteToday.getFullYear();
  month = this.doMonth();
  day = this.doDay();
  file: any;
  sendEnabled = false;
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
    private router: Router,
    public imgService: ImageService,
    private tokenService: TokenServiceService
  ) {
    this.form = this.formBuilder.group({
      tituloEdu: ['', [Validators.required]],
      institucionEdu: ['', [Validators.required]],
      fechaIniEdu: ['', [Validators.required]],
      fechaFinEdu: [''],
      descripcionEdu: ['', [Validators.required]],
      img_edu: [''],
    });
  }

  ngOnInit(): void {
    this.tokenService.isLogged() ? '' : this.router.navigateByUrl('/educacion');
    const urlSearchParams = new URLSearchParams(window.location.search);
    try {
      this.editId = urlSearchParams.get('id');
      this.editId
        ? this.educationService.details(this.editId).subscribe((data) => {
            this.educacion = data;
            // console.log(this.educacion);
          })
        : '';
    } catch (error) {}
    console.log();
  }

  onEnviar($event: { target: any }) {
    // console.log(this.educacion);

    if (this.form.valid && this.sendEnabled) {
      this.file
        ? (this.educacion.img_edu = this.imgService.url)
        : (this.educacion.img_edu = '');
      try {
        if (this.editId === null) {
          this.educationService.save(this.educacion).subscribe((data) => {
            Swal.fire('Se registró una nueva educación');
            this.imgService.url = '';
            this.router.navigateByUrl('/educacion');
          });
        } else {
          this.educationService
            .update(this.editId, this.educacion)
            .subscribe((data) => {
              Swal.fire('Se actualizó la educacion');
              this.imgService.url = '';
              this.router.navigateByUrl('/educacion');
            });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire(
        'Algún/os campos requeridos están vacíos o la imagen no terminó de cargar, revisá los campos o espera unos segundos que cargue la imagen e intentá de nuevo...'
      );
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
  async uploadImage($event: any) {
    const id = this.educacion.idEdu;
    const folder = '/educacion/' + id;
    const imgName = '/educacion_' + id;
    this.file = await this.imgService.uploadImage($event, imgName, folder);
    this.sendEnabled = true;
  }
}
