import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personNum } from 'src/app/global';
import { enviroment } from '../enviroment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(enviroment + 'person/'+personNum);
  }

}