import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Store } from '@ngrx/store';
import * as actions from '../Authreducers/auth.actions'
import { tap } from 'rxjs/operators';
import { noop } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {
    username:"sakthi",
    password:"sakthi"
  };
  constructor(private service:AppServiceService,private store:Store,private router:Router){}

  onSubmit() {
    console.log('Form Submitted!', this.model);
    this.store.dispatch({type:"inbuild action",payload:{user:"hjn"},header:"hj",jj:"hj"})
    this.service.login$().pipe(
      tap((user)=>{
    this.store.dispatch(actions.login({user}));
     })
    ).subscribe(
       noop,
       ()=>{console.log("login service error accured");
       }


    )
    this.router.navigateByUrl("courses")
    // Here you would typically handle the form submission, e.g., make an HTTP request
  }

}
