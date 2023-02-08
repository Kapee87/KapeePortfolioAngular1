import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = 'https://springbootbackendap-production.up.railway.app/personas/';
  personaVacía = {
    nombre: 'Nahuel Andrés',
    apellido: 'Montaner',
    fechaNac: '16/10/1987',
    telefono: '+54-9-02257-15-665721',
    correo: 'namontaner87@gmail.com',
    descripcion:
      '  Soy un hombre apasionado por muchas cosas, entre las que enumero la familia, las amistades, la música, la tecnología y la comida. Me gusta pensar que tengo facilidad para la creación. Con esta certeza, hice frente a varios desafíos de distintas índoles como mi propio taller de música, reformas de albañilería, electricidad y/o carpintería en mi hogar. Siempre dispuesto a aprender sobre lo que haga falta, y analizar desde la lógica el mejor abordaje para cada proyecto o trabajo a realizar. En un ambiente laboral puedo desempeñarme con muy buena autonomía, contribuyendo al equipo todo lo que pueda en pos de lograr los objetivos propuestos o requeridos. Prefiero las cosas claras, y es por eso que cuando no me siento apto para la tarea o de alguna forma mi juicio o desempeño pueden verse comprometidos de forma alguna, no tengo miedo de comunicarlo a quien corresponda, ya que confío en que las relaciones honestas son las que hacen a las bases de un equipo funcional. Me gusta asentarme y hallar mi lugar, en contra de la corriente popular actual de pasar de una empresa a otra, siempre y cuando existan las motivaciones suficientes para poder desarrollarme y sentirme cómodo en lo que hago.',
    urlFoto: 'aca va la url',
  };

  constructor(private httpClient: HttpClient) {}

  public getPersona(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(`${this.URL}traer/${id}`);
  }

  public getPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(`${this.URL}traer`);
  }
  public save(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(`${this.URL}crear`, persona);
  }
  public createEmpty(): Observable<any> {
    return this.httpClient.post<any>(`${this.URL}crear`, this.personaVacía);
  }

  public update(id: number | undefined, Persona: Persona): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}editar/${id}`, Persona);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}borrar/${id}`);
  }
  public deleteAll(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}vaciar`);
  }
}
