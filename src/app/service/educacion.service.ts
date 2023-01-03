import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  expUrl = 'http://localhost:8080/educacion/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.expUrl + 'traer');
  }

  public details(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(`${this.expUrl}/traer/${id}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(`${this.expUrl}/crear`, educacion);
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