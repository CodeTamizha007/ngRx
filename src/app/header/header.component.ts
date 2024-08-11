import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { distinctUntilChanged, map, Observable, tap } from 'rxjs';
import * as action from '../auth.actions'
import { login } from '../Authreducers/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogin:Observable<boolean>;
  isLogout:Observable<boolean>;
  constructor(private service:AppServiceService,private router:Router,private store:Store){
    this.isLogin=this.store.pipe(select(login));
    this.isLogout=this.store.pipe(map((val:any)=>!!val['auth'].user),distinctUntilChanged())
  }

  navigateTOcourses(){
    this.router.navigateByUrl("/courses")
  }

  navigateTOLogin(){
    this.router.navigateByUrl("/login")
    this.store.dispatch(action.logout())
  }



}
