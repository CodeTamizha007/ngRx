import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogin:boolean=false;
  constructor(private service:AppServiceService,private router:Router){
     this.service.login$().subscribe((value)=>{    
     })
  }

  navigateTOcourses(){
    this.router.navigateByUrl("/courses")
  }

  navigateTOLogin(){
    this.isLogin=true;
    this.router.navigateByUrl("/login")
  }



}
