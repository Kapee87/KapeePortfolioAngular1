import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editarabout',
  templateUrl: './editarabout.component.html',
  styleUrls: ['./editarabout.component.css'],
})
export class EditaraboutComponent implements OnInit {
  varclass = true;
  form: FormGroup;

  persona: Persona = new Persona('', '', '', '', '', '', '');
  personasList: Persona[] | undefined;

  constructor(
    public personaService: PersonaService,
    private fromBuilder: FormBuilder
  ) {
    this.form = this.fromBuilder.group({
      nombre: '',
      apellido: '',
      fechaNac: '',
      telefono: '',
      correo: '',
      descripcion: '',
    });
  }
  ngOnInit(): void {
    this.personaService.getPersonas().subscribe((data) => {
      this.persona = data[0];
      this.fromBuilder.group({
        nombre: this.persona.nombre,
        apellido: this.persona.apellido,
        fechaNac: this.persona.fechaNac,
        telefono: this.persona.telefono,
        correo: this.persona.correo,
        descripcion: this.persona.descripcion,
      });
      if (data[0].id !== 0 || data[0].id !== null || data[0].id !== undefined) {
        setTimeout(() => {
          this.varclass = !this.varclass;
        }, 500);
      }
    });
  }
  onSelect($event: { target: any }) {
    $event.target.value = $event.target.placeholder;
  }
  onEnviar() {}
}
