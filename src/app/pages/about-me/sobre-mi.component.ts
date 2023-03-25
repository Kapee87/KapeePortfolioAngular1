import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenServiceService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
})
export class SobreMiComponent implements OnInit {
  varclass = true;
  userLogged = false;
  persona: Persona = new Persona('', '', '', '', '', '', '');
  personasList: Persona[] | undefined;
  personaId: number | undefined;
  telefonoString: String | undefined;
  correoString: String | undefined;

  constructor(
    public personaService: PersonaService,
    private tokenService: TokenServiceService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.isLogged()) {
      this.userLogged = true;
    }
    try {
      this.personaService.getPersonas().subscribe((data) => {
        // console.log(data);
        if (data.length !== 0) {
          this.persona = data[0];
          this.telefonoString = `https://wa.me/2257665721`;
          this.correoString = 'mailto:' + data[0].correo;
          if (
            data[0].id !== 0 ||
            data[0].id !== null ||
            data[0].id !== undefined
          ) {
            setTimeout(() => {
              this.varclass = !this.varclass;
            }, 500);
          }
        } else {
          this.persona.apellido = 'Montaner';
          this.persona.nombre = 'Nahuel Andrés';
          this.telefonoString = '';
          this.correoString = '';
          this.persona.url_foto = '../../../assets/IMG_20220713_143637563.jpg';
          this.varclass = !this.varclass;
        }
        console.log(data);
      });
    } catch (error) {}
  }
}
