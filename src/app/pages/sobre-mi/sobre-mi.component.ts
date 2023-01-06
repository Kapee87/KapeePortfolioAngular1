import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
})
export class SobreMiComponent implements OnInit {
  varclass = true;
  persona: Persona = new Persona('', '', '', '', '', '', '');
  personasList: Persona[] | undefined;
  personaId: number | undefined;
  telefonoString: String | undefined;
  correoString: String | undefined;

  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe((data) => {
      this.persona = data[0];
      this.telefonoString = `https://wa.me/2257665721`;
      this.correoString = 'mailto:' + data[0].correo;
      if (data[0].id !== 0 || data[0].id !== null || data[0].id !== undefined) {
        setTimeout(() => {
          this.varclass = !this.varclass;
        }, 500);
      }
    });

    // this.personaService.getPersona().subscribe(data=> {
    //   this.persona = data;

    //   console.log(data)

    //   });

    //para request que devuelven listas.
    // this.personaService.getPersonas().subscribe(personas=>{
    //   this.personasList = personas
    //   console.log(this.personasList[0]);
    // })
  }
}
