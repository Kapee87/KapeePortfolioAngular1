import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", "", "", "");
  // personasList: Persona[] | undefined;
  telefonoString: String | undefined;
  correoString: String | undefined;

  constructor(public personaService: PersonaService) { }

   ngOnInit(): void {
    this.personaService.getPersona().subscribe(persona=> {
      this.persona = persona;
      this.telefonoString = `https://wa.me/2257665721`;
      this.correoString= "mailto:"+ persona.correo;
      });

      //para request que devuelven listas.
      // this.personaService.getPersonas().subscribe(personas=>{
      //   this.personasList = personas
      //   console.log(this.personasList[0]);
      // })
  }

  
}
