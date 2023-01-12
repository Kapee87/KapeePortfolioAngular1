import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://springbootbackendap-production.up.railway.app/personas/';

  constructor(private http:HttpClient) { }
  
  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.URL + 'traer/1102');
  }

  public getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.URL}traer`);
  }
}
