import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User.model';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root',
})
export class TokenServiceService {
  constructor(
    private httpClient: HttpClient,
    private urlService: ConexionService
  ) {}
  Url = `${this.urlService.getAuthUrl()}/login`;
  public Login(user: User) {
    // console.log(this.httpClient.post(this.Url, user));
    return this.httpClient.post(this.Url, user);
  }
  public getToken() {
    return sessionStorage.getItem('token');
  }
  public isLogged(): boolean {
    if (sessionStorage.getItem('token')) {
      // console.log('sale tru')
      return true;
    }
    // console.log('sale fols')
    return false;
  }
}
