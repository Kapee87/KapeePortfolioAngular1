import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  expUrl = `${this.urlService.getEducacionUrl()}`;

  constructor(
    private httpClient: HttpClient,
    private urlService: ConexionService
  ) {}

  public lista(): Observable<any> {
    return this.httpClient.get<any>(this.expUrl + '/lista');
  }

  public details(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(`${this.expUrl}/traer/${id}`);
  }

  public save(educacion: Educacion) {
    return this.httpClient.post(`${this.expUrl}/crear`, educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(`${this.expUrl}/editar/${id}`, educacion);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.expUrl}/borrar/${id}`);
  }
  public deleteAll(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.expUrl}/vaciar`);
  }
}
