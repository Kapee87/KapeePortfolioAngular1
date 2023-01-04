import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  URL = 'http://localhost:8080/skills/';

  constructor(private httpClient: HttpClient) {}

  public getSkills(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.URL + 'traerLista');
  }
}
