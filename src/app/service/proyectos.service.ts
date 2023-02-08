import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  URL = 'https://springbootbackendap-production.up.railway.app/proyectos/';

  constructor(private httpClient: HttpClient) {}

  public getProyectos(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.URL + 'traerLista');
  }
  public save(proyectos: Proyectos) {
    return this.httpClient.post(`${this.URL}crear`, proyectos);
  }
  public update(id: number, proyectos: Proyectos): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}editar/${id}`, proyectos);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}borrar/${id}`);
  }
  public deleteAll(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}vaciar`);
  }
}
