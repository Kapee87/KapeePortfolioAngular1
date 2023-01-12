import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root',
})
export class TokenServiceService {
  Url =
    'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login';

  constructor(private httpClient: HttpClient) {}

  public Login(user: User) {
    return this.httpClient.post(this.Url, user);
  }
}
