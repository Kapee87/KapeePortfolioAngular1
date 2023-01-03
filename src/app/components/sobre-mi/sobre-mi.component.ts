import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  varclass = true;
  persona: Persona = new Persona("", "", "", "", "", "", "");
  // personasList: Persona[] | undefined;
  telefonoString: String | undefined;
  correoString: String | undefined;

  constructor(public personaService: PersonaService) { }

   ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=> {
      this.persona = data;
      this.telefonoString = `https://wa.me/2257665721`;
      this.correoString= "mailto:"+ data.correo;
      console.log(data)

       if (data.id !== 0 || data.id !== null || data.id !== undefined){
        setTimeout(() => {
          this.varclass = !this.varclass;
        }, 500)};

      });



      //para request que devuelven listas.
      // this.personaService.getPersonas().subscribe(personas=>{
      //   this.personasList = personas
      //   console.log(this.personasList[0]);
      // })
  }

  
}
