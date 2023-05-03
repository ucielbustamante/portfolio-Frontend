import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { UserLogin } from '../model/user-login';
import { NewUser } from '../model/new-user';
import { enviroment } from '../enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = enviroment + 'auth/';

  constructor(private httpClient: HttpClient) { }

 public new(newUser: NewUser): Observable<any>{
   return this.httpClient.post<any>(this.authURL + 'new/', newUser);
 }

 public login(userLogin: UserLogin): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.authURL + 'login/', userLogin)
 }
}