import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  expUrl = 'https://springbootbackendap-production.up.railway.app/laboral/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expUrl + 'lista');
  }

  public details(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(`${this.expUrl}/experiencia/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(`${this.expUrl}/crear`, experiencia);
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
