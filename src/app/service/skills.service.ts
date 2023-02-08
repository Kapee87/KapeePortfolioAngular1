import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  URL = 'https://springbootbackendap-production.up.railway.app/skills/';

  constructor(private httpClient: HttpClient) {}

  public getSkills(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.URL + 'traerLista');
  }
  public save(skills: Skills) {
    return this.httpClient.post(`${this.URL}crear`, skills);
  }
  public update(id: number, skills: Skills): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}editar/${id}`, skills);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}borrar/${id}`);
  }
  public deleteAll(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}vaciar`);
  }
}
