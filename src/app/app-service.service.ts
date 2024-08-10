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

  courses$():Observable<Array<Course>>{
    return this.http.get<Array<Course>>("http://localhost:3000/courses")
  }
}

export interface Course {
  name: string;
  version: number;
  description: string;
  fees: number;
  type: 'paid' | 'free';
  content: 'beginner' | 'intermediate' | 'advanced';
}


export interface LoginDate {
  mailid:string,
  name:string
  password:string
}
