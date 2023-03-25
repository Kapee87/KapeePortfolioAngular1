import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills.model';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  URL = `${this.urlService.getSkillsUrl()}`;

  constructor(
    private httpClient: HttpClient,
    private urlService: ConexionService
  ) {}

  public getSkills(): Observable<any> {
    return this.httpClient.get<any>(this.URL + '/lista');
  }
  public getSkillById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/traer/${id}`);
  }
  public save(skills: Skills) {
    return this.httpClient.post(`${this.URL}/crear`, skills);
  }
  public update(id: number, skills: Skills): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}/editar/${id}`, skills);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}/borrar/${id}`);
  }
  public deleteAll(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}/vaciar`);
  }
}
