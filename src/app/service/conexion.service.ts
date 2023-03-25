import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
baseUrl = 'http://localhost:8080'
  constructor() { }

  public getAuthUrl(){
    return `${this.baseUrl}/auth`
  }
  public getPersonaUrl(){
    return `${this.baseUrl}/personas`
  }
  public getProyectosUrl(){
    return `${this.baseUrl}/proyectos`
  }
  public getEducacionUrl(){
    return `${this.baseUrl}/educacion`
  }
  public getExperienciaUrl(){
    return `${this.baseUrl}/laboral`
  }
  public getSkillsUrl(){
    return `${this.baseUrl}/skills`
  }

}
