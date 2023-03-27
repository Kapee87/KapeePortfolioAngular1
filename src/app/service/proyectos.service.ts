import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos.model';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  URL = `${this.urlService.getProyectosUrl()}`;

  constructor(
    private httpClient: HttpClient,
    private urlService: ConexionService
  ) {}

  public getProyectos(): Observable<any> {
    return this.httpClient.get<any>(this.URL + '/lista');
  }
  public getProyectoById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/traer/${id}`);
  }
  public save(proyectos: Proyectos) {
    return this.httpClient.post(`${this.URL}/crear`, proyectos);
  }
  public update(id: number, proyectos: Proyectos): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}/editar/${id}`, proyectos);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}/borrar/${id}`);
  }
  public deleteAll(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}/vaciar`);
  }
}
