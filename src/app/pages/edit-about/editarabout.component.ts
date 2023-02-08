import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, timer } from 'rxjs';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenServiceService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
import { __values } from 'tslib';

@Component({
  selector: 'app-editarabout',
  templateUrl: './editarabout.component.html',
  styleUrls: ['./editarabout.component.css'],
})
export class EditaraboutComponent implements OnInit {
  varclass = true;
  form: FormGroup;
  isEditing: boolean = true;
  persona: Persona = new Persona('', '', '', '', '', '', '');
  personaId: number | undefined;

  constructor(
    public personaService: PersonaService,
    private formBuilder: FormBuilder,
    private tokenService: TokenServiceService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      fechaNac: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
  ngOnInit(): void {
    Swal.fire({
      html: 'Al seleccionar los campos, el contenido anterior(si existe) se introduce en la caja de entrada de texto correspondiente, pero para que pueda cargar la actualización debe existir una alteración a ese contenido, de lo contrario no se actualizará la base de datos.',
      timer: 10000,
      timerProgressBar: true,
    });

    if (!this.tokenService.isLogged()) {
      this.router.navigateByUrl('/');
    }
    this.personaService.getPersonas().subscribe((data) => {
      if (data.length !== 0) {
        this.personaId = data[0].id;
        this.persona = data[0];
        this.isEditing = true;
        if (
          data[0].id !== 0 ||
          data[0].id !== null ||
          data[0].id !== undefined
        ) {
          this.varclass = !this.varclass;
        }
      } else {
        this.isEditing = false;
        this.varclass = !this.varclass;
        this.personaService
          .save({
            nombre: 'Nahuel Andrés',
            apellido: 'Montaner',
            fechaNac: '16/10/1987',
            telefono: '+54-9-02257-15-665721',
            correo: 'namontaner87@gmail.com',
            descripcion:
              'Soy un hombre apasionado por muchas cosas, entre las que enumero la familia, las amistades, la música, la tecnología y la comida. Me gusta pensar que tengo facilidad para la creación. Con esta certeza, hice frente a varios desafíos de distintas índoles como mi propio taller de música, reformas de albañilería, electricidad y/o carpintería en mi hogar. Siempre dispuesto a aprender sobre lo que haga falta, y analizar desde la lógica el mejor abordaje para cada proyecto o trabajo a realizar. En un ambiente laboral puedo desempeñarme con muy buena autonomía, contribuyendo al equipo todo lo que pueda en pos de lograr los objetivos propuestos o requeridos. Prefiero las cosas claras, y es por eso que cuando no me siento apto para la tarea o de alguna forma mi juicio o desempeño pueden verse comprometidos de forma alguna, no tengo miedo de comunicarlo a quien corresponda, ya que confío en que las relaciones honestas son las que hacen a las bases de un equipo funcional. Me gusta asentarme y hallar mi lugar, en contra de la corriente popular actual de pasar de una empresa a otra, siempre y cuando existan las motivaciones suficientes para poder desarrollarme y sentirme cómodo en lo que hago.',
            urlFoto: 'aca va la url',
          })
          .subscribe((data) => {
            console.log(data);
            Swal.fire('Hubo algún problema en el servidor, intentar de nuevo');
            this.router.navigateByUrl('/sobre-mi', {
              skipLocationChange: false,
            });
          });
      }
    });
  }

  onSelect($event: { target: any }) {
    if ($event.target.value === '') {
      $event.target.value = $event.target.placeholder;
      this.onChange($event);
    }
  }
  onChange($event: { target: any }) {
    if ($event.target.name === 'nombre') {
      this.persona.nombre = $event.target.value;
    }
    if ($event.target.name === 'apellido') {
      this.persona.apellido = $event.target.value;
    }
    if ($event.target.name === 'fechaNac') {
      this.persona.fechaNac = $event.target.value;
    }
    if ($event.target.name === 'telefono') {
      this.persona.telefono = $event.target.value;
    }
    if ($event.target.name === 'correo') {
      this.persona.correo = $event.target.value;
    }
    if ($event.target.name === 'descripcion') {
      this.persona.descripcion = $event.target.value;
    }
  }
  onCleanUp($event: { target: any }) {
    this.persona = new Persona('', '', '', '', '', '', '');
  }

  onEnviar(event: Event) {
    event.preventDefault();
    if (this.personaId !== undefined && this.form.valid) {
      this.personaService.getPersona(this.personaId).subscribe((userFind) => {
        if (userFind !== null) {
          this.personaService
            .update(this.personaId, this.persona)
            .subscribe((data) => {
              // console.log(data);
              if (data.id) {
                Swal.fire(
                  'Exito!',
                  'los datos fueron correctamente actualizados',
                  'success'
                );
                this.router.navigateByUrl('/sobre-mi');
              }
            });
        } else {
          Swal.fire(
            'No se pueden actualizar los datos, intente de nuevo más tarde'
          );
        }
      });
    } else {
      console.log(this.persona, this.form);
      Swal.fire(
        'Algún campo está vacío o se produjo un error',
        'Complete o modifique los campos de datos, o vuelva atrás e intente de nuevo'
      );
    }
  }
}
