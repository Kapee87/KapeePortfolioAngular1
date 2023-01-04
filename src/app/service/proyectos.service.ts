import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  URL = 'http://localhost:8080/proyectos/';

  constructor(private httpClient: HttpClient) {}

  public getProyectos(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.URL + 'traerLista');
  }
}
