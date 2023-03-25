import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  expUrl = `${this.urlService.getExperienciaUrl()}`;

  constructor(
    private httpClient: HttpClient,
    private urlService: ConexionService
  ) {}

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expUrl + '/lista');
  }

  public details(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(`${this.expUrl}/experiencia/${id}`);
  }

  public save(experiencia: Experiencia) {
    return this.httpClient.post(`${this.expUrl}/crear`, experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(`${this.expUrl}/editar/${id}`, experiencia);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.expUrl}/borrar/${id}`);
  }
  public deleteAll(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.expUrl}/vaciar`);
  }
}
