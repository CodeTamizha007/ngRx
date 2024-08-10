import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map, Observable, tap } from 'rxjs';
import {filter} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

  login$():Observable<LoginDate>{
     return this.http.get<LoginDate>('http://localhost:3000/user');
  }
}

export interface LoginDate {
  mailid:string,
  name:string
  password:string
}
